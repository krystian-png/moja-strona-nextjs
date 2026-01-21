export const dynamic = "force-dynamic"
import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { contactInquiries } from "@/lib/schema"
import { desc } from "drizzle-orm"

export async function GET() {
  try {
    const db = getDb()

    const contacts = await db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt))
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Błąd pobierania kontaktów:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
