export const dynamic = "force-dynamic"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { pageVisits, contactInquiries, articleViews, sessions } from "@/lib/schema"
import { sql, gte } from "drizzle-orm"

export async function GET() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const totalVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
    const totalVisits = Number(totalVisitsResult[0]?.count || 0)

    const todayVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
      .where(gte(pageVisits.timestamp, today))
    const todayVisits = Number(todayVisitsResult[0]?.count || 0)

    const totalContactsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(contactInquiries)
    const totalContacts = Number(totalContactsResult[0]?.count || 0)

    const newContactsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(contactInquiries)
      .where(sql`${contactInquiries.status} = 'new'`)
    const newContacts = Number(newContactsResult[0]?.count || 0)

    const totalSessionsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(sessions)
    const totalSessions = Number(totalSessionsResult[0]?.count || 0)

    const totalArticleViewsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articleViews)
    const totalArticleViews = Number(totalArticleViewsResult[0]?.count || 0)

    return NextResponse.json({
      totalVisits,
      todayVisits,
      totalContacts,
      newContacts,
      totalSessions,
      totalArticleViews,
      totalArticles: 13,
    })
  } catch (error) {
    console.error("Błąd pobierania statystyk:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
