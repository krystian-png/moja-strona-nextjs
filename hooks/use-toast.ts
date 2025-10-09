import * as React from "react"

export type ToastVariant = "default" | "destructive"

export interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
}

export function useToast() {
  const toast = React.useCallback((options: ToastOptions) => {
    const message = [options.title, options.description].filter(Boolean).join(" — ")

    if (options.variant === "destructive") {
      console.error(message || "Wystąpił błąd w trakcie wyświetlania powiadomienia.")
    } else {
      console.log(message || "Powiadomienie")
    }
  }, [])

  return { toast }
}
