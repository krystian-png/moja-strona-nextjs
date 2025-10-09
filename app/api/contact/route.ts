import { NextResponse } from "next/server"
import { z } from "zod"

const payloadSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1),
  privacyConsent: z.boolean(),
  captcha: z.string().optional(),
  name: z.string().min(1),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)

  const parsed = payloadSchema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json({
      success: false,
      errors: parsed.error.flatten(),
    }, { status: 400 })
  }

  // In a production application you would trigger email notifications or persist the data here.
  return NextResponse.json({ success: true })
}
