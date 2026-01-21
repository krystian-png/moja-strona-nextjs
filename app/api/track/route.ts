export const dynamic = "force-dynamic"
import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { pageVisits, articleViews, sessions } from "@/lib/schema"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, path, articleSlug, sessionId } = body
    const db = getDb()

    if (type === "page") {
      await db.insert(pageVisits).values({
        path: path,
        sessionId: sessionId || null,
        timestamp: new Date()
      })
    } else if (type === "article" && articleSlug) {
      await db.insert(articleViews).values({
        articleSlug: articleSlug,
        sessionId: sessionId || null,
        timestamp: new Date()
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Błąd trackingu:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
