"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Mail, Send } from "lucide-react"
export default function AdminEmailPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [isTesting, setIsTesting] = useState(false)
  const handleSave = async () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1000)
  }
  const handleTestEmail = async () => {
    setIsTesting(true)
    setTimeout(() => setIsTesting(false), 2000)
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
            Konfiguracja E-mail
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Ustawienia SMTP
            </CardTitle>
            <CardDescription>
              Konfiguracja serwera poczty wychodzącej
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="smtpHost">Host SMTP</Label>
                <Input id="smtpHost" placeholder="smtp.gmail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtpPort">Port</Label>
                <Input id="smtpPort" placeholder="587" type="number" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="smtpUser">Użytkownik</Label>
                <Input id="smtpUser" placeholder="user@gmail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtpPass">Hasło</Label>
                <Input id="smtpPass" type="password" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="smtpSecure" />
              <Label htmlFor="smtpSecure">Użyj szyfrowania TLS/SSL</Label>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Adres nadawcy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fromName">Nazwa nadawcy</Label>
                <Input id="fromName" defaultValue="ZmianaKRS" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fromEmail">E-mail nadawcy</Label>
                <Input id="fromEmail" defaultValue="biuro@zmianakrs.pl" />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between">
          <Button variant="outline" onClick={handleTestEmail} disabled={isTesting}>
            <Send className="h-4 w-4 mr-2" />
            {isTesting ? "Wysyłanie..." : "Wyślij testowy e-mail"}
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Zapisywanie..." : "Zapisz ustawienia"}
          </Button>
        </div>
      </main>
    </div>
  )
}
