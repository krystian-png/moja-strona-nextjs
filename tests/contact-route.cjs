const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

function load(file, mocks = {}) {
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText
  const exports = {}
  vm.runInNewContext(source, {
    exports, require: name => mocks[name] || (name.startsWith("@/") ? {} : require(name)), process, Request, Error,
    console: { log() {}, error() {} }, fetch: mocks.fetch,
  }, { filename: file })
  return exports
}
const payload = { fullName: 'Test Testowy', email: 'test@example.invalid', phone: '', message: 'Fikcyjna wiadomość testowa', website: '' }
const request = data => new Request('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(data) })

test('SMTP acceptance returns success and sends once to the configured office recipient', async () => {
  const messages = []
  const { POST } = load('app/api/contact/route.ts', { nodemailer: { createTransport: () => ({ sendMail: async m => { messages.push(m); return { accepted: [m.to] } } }) } })
  const response = await POST(request(payload))
  assert.equal(response.status, 200)
  assert.equal((await response.json()).success, true)
  assert.equal(messages.length, 1)
  assert.equal(messages[0].to, process.env.CONTACT_EMAIL || 'biuro@kancelaria-karpiuk.pl')
  assert.match(messages[0].text, /Fikcyjna wiadomość testowa/)
})
test('SMTP rejection returns 502 and safe failure instead of false success', async () => {
  const { POST } = load('app/api/contact/route.ts', { nodemailer: { createTransport: () => ({ sendMail: async () => { throw new Error('private SMTP credentials') } }) } })
  const response = await POST(request(payload))
  assert.equal(response.status, 502)
  const result = await response.json()
  assert.equal(result.success, false)
  assert.ok(!JSON.stringify(result).includes('credentials'))
})
test('honeypot skips SMTP; invalid input and malformed JSON return 400', async () => {
  let calls = 0
  const { POST } = load('app/api/contact/route.ts', { nodemailer: { createTransport: () => ({ sendMail: async () => { calls++ } }) } })
  assert.equal((await POST(request({ ...payload, website: 'spam.invalid' }))).status, 200)
  assert.equal((await POST(request({ ...payload, message: 'x' }))).status, 400)
  assert.equal((await POST(new Request('http://localhost/api/contact', { method: 'POST', body: '{' }))).status, 400)
  assert.equal(calls, 0)
})
test('shared apiRequest throws on HTTP 502 for every form consumer', async () => {
  const { apiRequest } = load('lib/queryClient.ts', { fetch: async () => new Response(JSON.stringify({ success: false, message: 'Nie udało się wysłać wiadomości.' }), { status: 502 }) })
  await assert.rejects(apiRequest('/api/contact', { data: payload }), /Nie udało się wysłać/)
})

for (const file of [
  'app/(site)/uslugi/_components/InlineContactForm.tsx',
  'app/(site)/uslugi/_components/InlineContactFormEn.tsx',
  'app/(site)/en/contact/contact-content.tsx',
  'components/krs-language/KrsContactForm.tsx',
]) {
  test(`${file}: HTTP 502 reaches error state without invoking success`, async () => {
    let options, state
    const { apiRequest } = load('lib/queryClient.ts', { fetch: async () => new Response('{"success":false,"message":"Test failure"}', { status: 502 }) })
    const component = load(file, {
      'react/jsx-runtime': { jsx: () => null, jsxs: () => null },
      react: { useMemo: fn => fn(), useState: () => [null, value => { state = value }] },
      '@tanstack/react-query': {
        useQueryClient: () => ({}),
        useMutation: value => { options = value; return {} },
      },
      'react-hook-form': { useForm: () => ({ handleSubmit: () => () => {} }) },
      '@/lib/queryClient': { apiRequest },
      '@/lib/utils': { cn: () => '' },
    }).default
    component({ className: '', locale: 'en', copy: { error: 'Test failure' } })
    await options.mutationFn(payload).then(options.onSuccess, options.onError)
    assert.equal(state.type, 'error')
    assert.equal(state.message, 'Test failure')
  })
}
