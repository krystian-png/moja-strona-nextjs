export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { pageVisits, articleViews } from "@/lib/schema"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, path, articleSlug, articleId } = body
    const db = getDb()

    const userAgent = request.headers.get("user-agent") || null
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || null
    const referer = request.headers.get("referer") || null
    if (type === "page") {
      await db.insert(pageVisits).values({
        path: path,
        userAgent: userAgent,
        ip: ip,
        referer: referer,
        timestamp: new Date()
      })
    } else if (type === "article" && articleSlug) {
      await db.insert(articleViews).values({
        articleId: articleId || 0,
        articleSlug: articleSlug,
        userAgent: userAgent,
        ip: ip,
        timestamp: new Date()
      })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Błąd trackingu:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
