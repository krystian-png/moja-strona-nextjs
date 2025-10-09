export interface ApiRequestOptions extends RequestInit {
  data?: unknown
}

export async function apiRequest<TResponse>(url: string, { data, headers, ...init }: ApiRequestOptions = {}) {
  const body = data !== undefined ? JSON.stringify(data) : init.body
  const method = init.method ?? (data !== undefined ? "POST" : undefined)

  const response = await fetch(url, {
    ...init,
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers as Record<string, string> | undefined),
    },
    body,
  })

  const text = await response.text()
  let payload: unknown = null

  if (text) {
    try {
      payload = JSON.parse(text)
    } catch {
      payload = text
    }
  }

  if (!response.ok) {
    const errorMessage = typeof payload === "string" ? payload : (payload as { message?: string })?.message
    throw new Error(errorMessage || "Nie udało się zrealizować żądania.")
  }

  return payload as TResponse
}
