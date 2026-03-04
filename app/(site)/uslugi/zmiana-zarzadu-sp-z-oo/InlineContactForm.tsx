"use client"

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { apiRequest } from "@/lib/queryClient"
import { cn } from "@/lib/utils"

const contactFormSchema = z.object({
  fullName: z.string().trim().min(3, "Imię i nazwisko musi mieć co najmniej 3 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().max(20, "Numer telefonu może mieć maksymalnie 20 znaków").optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  website: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>
type ContactFormPayload = ContactFormData

const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
}

type InlineContactFormProps = {
  className?: string
}

export default function InlineContactForm({ className }: InlineContactFormProps) {
  const queryClient = useQueryClient()
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const submitContactMutation = useMutation({
    mutationFn: (data: ContactFormPayload) =>
      apiRequest<{ success: boolean }>("/api/contact", {
        method: "POST",
        data,
      }),
    onSuccess: () => {
      setSubmissionStatus({
        type: "success",
        message: "Wiadomość została wysłana. Odezwiemy się bezzwłocznie.",
      })
      queryClient.invalidateQueries({ queryKey: ["contact-submissions"] }).catch(() => undefined)
      form.reset(defaultValues)
    },
    onError: (error: unknown) => {
      setSubmissionStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Nie udało się wysłać formularza. Spróbuj ponownie później.",
      })
    },
  })

  const onSubmit = (data: ContactFormData) => {
    setSubmissionStatus(null)
    submitContactMutation.mutate(data)
  }

  const isSubmitting = submitContactMutation.isPending

  return (
    <div className={cn("w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-5", className)}>
      {submissionStatus ? (
        <div
          className={`mb-4 rounded-md border px-3 py-2 text-sm ${
            submissionStatus.type === "success"
              ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
              : "border-red-400/60 bg-red-500/10 text-red-100"
          }`}
          role={submissionStatus.type === "error" ? "alert" : "status"}
        >
          {submissionStatus.message}
        </div>
      ) : null}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-white">Imię i nazwisko</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    required
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-white">Adres email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    required
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-white">Telefon</FormLabel>
                <FormControl>
                  <Input
                    id="phone"
                    type="tel"
                    maxLength={20}
                    placeholder="Opcjonalnie"
                    {...field}
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-white">Wiadomość</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Opisz swoją sprawę..."
                    className="min-h-[96px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="hidden" aria-hidden="true">
                <FormControl>
                  <Input type="text" autoComplete="off" tabIndex={-1} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="h-10 w-full bg-amber-600 text-white hover:bg-amber-700" disabled={isSubmitting}>
            {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
