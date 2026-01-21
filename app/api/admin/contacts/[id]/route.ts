export const dynamic = "force-dynamic"
import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { contactInquiries } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const db = getDb()
    await db
      .update(contactInquiries)
      .set({
        status: body.status,
        updatedAt: new Date()
      })
      .where(eq(contactInquiries.id, parseInt(id)))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Błąd aktualizacji kontaktu:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
