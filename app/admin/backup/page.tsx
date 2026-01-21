"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Upload, Database, Clock, CheckCircle } from "lucide-react"
interface Backup {
  id: number
  date: string
  size: string
  type: string
}
export default function AdminBackupPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [backups] = useState<Backup[]>([
    { id: 1, date: "2025-01-21 09:00", size: "2.4 MB", type: "Automatyczny" },
    { id: 2, date: "2025-01-20 09:00", size: "2.3 MB", type: "Automatyczny" },
    { id: 3, date: "2025-01-19 15:30", size: "2.2 MB", type: "Ręczny" },
  ])
  const handleCreateBackup = async () => {
    setIsCreating(true)
    setTimeout(() => setIsCreating(false), 2000)
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
            Kopie zapasowe
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Utwórz kopię zapasową
            </CardTitle>
            <CardDescription>
              Ręczne tworzenie kopii zapasowej bazy danych
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ostatnia kopia: {backups[0]?.date || "Brak"}
                </p>
              </div>
              <Button onClick={handleCreateBackup} disabled={isCreating}>
                <Download className="h-4 w-4 mr-2" />
                {isCreating ? "Tworzenie..." : "Utwórz kopię"}
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Historia kopii zapasowych</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {backups.map((backup) => (
                <div 
                  key={backup.id} 
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{backup.date}</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Rozmiar: {backup.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{backup.type}</Badge>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Pobierz
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Przywróć
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Informacje o bazie danych</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Typ bazy</p>
                <p className="font-medium">PostgreSQL (Neon)</p>
              </div>
              <div>
                <p className="text-gray-500">Region</p>
                <p className="font-medium">us-east-2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
