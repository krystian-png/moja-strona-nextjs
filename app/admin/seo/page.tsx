"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Globe, FileText } from "lucide-react"
export default function AdminSeoPage() {
  const [isSaving, setIsSaving] = useState(false)
  const handleSave = async () => {
    setIsSaving(true)
    // TODO: Implement SEO settings save
    setTimeout(() => setIsSaving(false), 1000)
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
            Ustawienia SEO
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Ogólne ustawienia SEO
            </CardTitle>
            <CardDescription>
              Domyślne meta tagi dla całej strony
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteTitle">Tytuł strony</Label>
              <Input 
                id="siteTitle" 
                defaultValue="ZmianaKRS - Profesjonalne usługi rejestrowe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">Opis strony (meta description)</Label>
              <Textarea 
                id="siteDescription" 
                rows={3}
                defaultValue="Profesjonalne usługi związane z Krajowym Rejestrem Sądowym. Pomagamy w rejestracji i zmianach w KRS."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keywords">Słowa kluczowe</Label>
              <Input 
                id="keywords" 
                defaultValue="KRS, rejestr sądowy, zmiana wpisu, rejestracja spółki"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Open Graph / Social Media
            </CardTitle>
            <CardDescription>
              Ustawienia dla udostępniania w mediach społecznościowych
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ogTitle">Tytuł OG</Label>
              <Input 
                id="ogTitle" 
                defaultValue="ZmianaKRS - Twój partner w sprawach KRS"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ogDescription">Opis OG</Label>
              <Textarea 
                id="ogDescription" 
                rows={2}
                defaultValue="Szybko i profesjonalnie załatwimy wszystkie formalności związane z KRS."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ogImage">URL obrazka OG</Label>
              <Input 
                id="ogImage" 
                placeholder="https://zmianakrs.pl/og-image.jpg"
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Zapisywanie..." : "Zapisz ustawienia"}
          </Button>
        </div>
      </main>
    </div>
  )
}
