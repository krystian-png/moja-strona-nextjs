import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

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

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "serwer2558802.home.pl",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "biuro@zmianakrs.pl",
    pass: process.env.SMTP_PASS,
  },
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
  const { firstName, lastName, email, phone, service, message } = parsed.data
  const emailBody = `Otrzymano nowe zapytanie kontaktowe ze strony zmianakrs.pl:
Imię i nazwisko: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phone || "Nie podano"}
Usługa: ${service || "Zapytanie ogólne"}
Treść wiadomości:
${message}
Data zgłoszenia: ${new Date().toLocaleString("pl-PL")}
---
Wiadomość została wysłana automatycznie z systemu zmianakrs.pl`
  try {
    await transporter.sendMail({
      from: `"Zmiana KRS - System powiadomień" <${process.env.SMTP_USER || "biuro@zmianakrs.pl"}>`,
      to: process.env.CONTACT_EMAIL || "biuro@kancelaria-karpiuk.pl",
      subject: `Nowe zgłoszenie kontaktowe od ${firstName} ${lastName}`,
      text: emailBody,
      html: emailBody.replace(/\n/g, "<br>"),
    })

    console.log("Email sent successfully")
  } catch (error) {
    console.error("Failed to send email:", error)
    // Nie przerywamy - formularz zapisujemy nawet jak mail nie wyjdzie
  }
  return NextResponse.json({ success: true })
}
