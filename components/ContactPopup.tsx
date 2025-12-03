"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function ContactPopup() {
  const [showBubble, setShowBubble] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const hideBubble = () => {
    setShowBubble(false)
  }

  const handleContactClick = () => {
    router.push("/kontakt")
  }

  if (!showBubble) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button
          onClick={hideBubble}
          variant="ghost"
          size="sm"
          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 h-6 w-6 z-10"
          aria-label="Zamknij"
        >
          <X className="h-3 w-3" />
        </Button>
        <div className="animate-pulse">
          <Button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-2xl shadow-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Potrzebujesz pomocy, skontaktuj się z nami
          </Button>
        </div>
      </div>
    </div>
  )
}
