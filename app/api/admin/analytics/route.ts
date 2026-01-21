export const dynamic = "force-dynamic"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { pageVisits, articleViews, sessions } from "@/lib/schema"
import { sql, gte, desc } from "drizzle-orm"

export async function GET() {
  try {
    const now = new Date()

    const today = new Date(now)
    today.setHours(0, 0, 0, 0)

    const weekAgo = new Date(now)
    weekAgo.setDate(weekAgo.getDate() - 7)

    const monthAgo = new Date(now)
    monthAgo.setDate(monthAgo.getDate() - 30)

    const totalVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
    const totalVisits = Number(totalVisitsResult[0]?.count || 0)

    const todayVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
      .where(gte(pageVisits.timestamp, today))
    const todayVisits = Number(todayVisitsResult[0]?.count || 0)

    const weekVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
      .where(gte(pageVisits.timestamp, weekAgo))
    const weekVisits = Number(weekVisitsResult[0]?.count || 0)

    const monthVisitsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(pageVisits)
      .where(gte(pageVisits.timestamp, monthAgo))
    const monthVisits = Number(monthVisitsResult[0]?.count || 0)

    const totalSessionsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(sessions)
    const totalSessions = Number(totalSessionsResult[0]?.count || 0)

    const totalArticleViewsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articleViews)
    const totalArticleViews = Number(totalArticleViewsResult[0]?.count || 0)

    const topPages = await db
      .select({
        path: pageVisits.path,
        count: sql<number>`count(*)`.as("count"),
      })
      .from(pageVisits)
      .groupBy(pageVisits.path)
      .orderBy(desc(sql`count(*)`))
      .limit(10)

    const topArticles = await db
      .select({
        slug: articleViews.articleSlug,
        count: sql<number>`count(*)`.as("count"),
      })
      .from(articleViews)
      .groupBy(articleViews.articleSlug)
      .orderBy(desc(sql`count(*)`))
      .limit(10)

    const visitsByDay = await db
      .select({
        date: sql<string>`DATE(${pageVisits.timestamp})`.as("date"),
        count: sql<number>`count(*)`.as("count"),
      })
      .from(pageVisits)
      .where(gte(pageVisits.timestamp, weekAgo))
      .groupBy(sql`DATE(${pageVisits.timestamp})`)
      .orderBy(desc(sql`DATE(${pageVisits.timestamp})`))

    return NextResponse.json({
      totalVisits,
      todayVisits,
      weekVisits,
      monthVisits,
      totalSessions,
      totalArticleViews,
      topPages: topPages.map((p) => ({ path: p.path, count: Number(p.count) })),
      topArticles: topArticles.map((a) => ({
        slug: a.slug,
        count: Number(a.count),
      })),
      visitsByDay: visitsByDay.map((d) => ({
        date: d.date,
        count: Number(d.count),
      })),
    })
  } catch (error) {
    console.error("Błąd pobierania analityki:", error)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
