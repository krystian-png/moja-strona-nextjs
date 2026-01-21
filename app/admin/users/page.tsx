"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, UserPlus, Key, Trash2, Shield } from "lucide-react"
interface User {
  id: number
  username: string
  role: string
  lastLogin: string
}
export default function AdminUsersPage() {
  const [users] = useState<User[]>([
    { id: 1, username: "admin", role: "Administrator", lastLogin: "2025-01-21 10:30" }
  ])
  const [showAddForm, setShowAddForm] = useState(false)
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
            Zarządzanie użytkownikami
          </h1>
          <Button className="ml-auto" onClick={() => setShowAddForm(!showAddForm)}>
            <UserPlus className="h-4 w-4 mr-2" />
            Dodaj użytkownika
          </Button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Nowy użytkownik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newUsername">Nazwa użytkownika</Label>
                  <Input id="newUsername" placeholder="jan.kowalski" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Hasło</Label>
                  <Input id="newPassword" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button>Utwórz użytkownika</Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Anuluj
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader>
            <CardTitle>Lista użytkowników</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{user.username}</p>
                      <p className="text-sm text-gray-500">
                        Ostatnie logowanie: {user.lastLogin}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>{user.role}</Badge>
                    <Button variant="outline" size="icon">
                      <Key className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" disabled={user.username === "admin"}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zmiana hasła administratora</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Hasło administratora można zmienić w ustawieniach Vercel → Environment Variables 
              (ADMIN_USERNAME i ADMIN_PASSWORD)
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
