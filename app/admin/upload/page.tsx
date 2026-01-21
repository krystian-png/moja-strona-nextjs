"use client"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Upload, Image, File, Trash2 } from "lucide-react"
export default function AdminUploadPage() {
  const [files, setFiles] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (!selectedFiles) return
    setIsUploading(true)
    // TODO: Implement file upload
    setTimeout(() => {
      setFiles([...files, ...Array.from(selectedFiles).map(f => f.name)])
      setIsUploading(false)
    }, 1000)
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
            Zarządzanie plikami
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Wgraj nowy plik
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              <Input
                type="file"
                multiple
                onChange={handleUpload}
                className="hidden"
                id="file-upload"
                accept="image/*,.pdf,.doc,.docx"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {isUploading ? "Wgrywanie..." : "Kliknij lub przeciągnij pliki tutaj"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Obsługiwane formaty: JPG, PNG, PDF, DOC
                </p>
              </label>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wgrane pliki</CardTitle>
          </CardHeader>
          <CardContent>
            {files.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Brak wgranych plików</p>
            ) : (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      {file.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                        <Image className="h-5 w-5 text-blue-500" />
                      ) : (
                        <File className="h-5 w-5 text-gray-500" />
                      )}
                      <span className="text-sm">{file}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
