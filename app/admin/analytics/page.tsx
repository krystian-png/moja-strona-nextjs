"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Eye,
  Users,
  FileText,
  TrendingUp,
  Calendar,
} from "lucide-react"

interface AnalyticsData {
  totalVisits: number
  todayVisits: number
  weekVisits: number
  monthVisits: number
  totalSessions: number
  totalArticleViews: number
  topPages: Array<{ path: string; count: number }>
  topArticles: Array<{ slug: string; count: number }>
  visitsByDay: Array<{ date: string; count: number }>
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics")
      if (res.ok) {
        const result = await res.json()
        setData(result)
      }
    } catch (error) {
      console.error("Błąd pobierania analityki:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <p>Ładowanie...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Analityka
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Wszystkie odwiedziny
              </CardTitle>
              <Eye className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data?.totalVisits.toLocaleString() || 0}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Dzisiaj
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data?.todayVisits.toLocaleString() || 0}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Unikalne sesje
              </CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data?.totalSessions.toLocaleString() || 0}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Wyświetlenia artykułów
              </CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data?.totalArticleViews.toLocaleString() || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pages" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pages">Popularne strony</TabsTrigger>
            <TabsTrigger value="articles">Popularne artykuły</TabsTrigger>
            <TabsTrigger value="timeline">Ostatnie dni</TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <Card>
              <CardHeader>
                <CardTitle>Najpopularniejsze strony</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data?.topPages && data.topPages.length > 0 ? (
                    data.topPages.map((page, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                      >
                        <span className="text-sm font-medium">
                          {page.path}
                        </span>
                        <span className="text-sm text-gray-500">
                          {page.count} odwiedzin
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Brak danych</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>Najpopularniejsze artykuły</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data?.topArticles && data.topArticles.length > 0 ? (
                    data.topArticles.map((article, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                      >
                        <span className="text-sm font-medium">
                          {article.slug}
                        </span>
                        <span className="text-sm text-gray-500">
                          {article.count} wyświetleń
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Brak danych</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Odwiedziny w ostatnich 7 dniach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data?.visitsByDay && data.visitsByDay.length > 0 ? (
                    data.visitsByDay.map((day, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                      >
                        <span className="text-sm font-medium">
                          {day.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          {day.count} odwiedzin
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Brak danych</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
