"use client"

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { apiRequest } from "@/lib/queryClient"
import type { KrsFormCopy } from "@/lib/krs-language-copy"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type ContactFormData = {
  fullName: string
  email: string
  phone?: string
  message: string
  website?: string
}

const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
}

export default function KrsContactForm({
  locale,
  copy,
}: {
  locale: string
  copy: KrsFormCopy
}) {
  const queryClient = useQueryClient()
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const schema = z.object({
    fullName: z.string().trim().min(3, copy.validationName),
    email: z.string().email(copy.validationEmail),
    phone: z.string().max(20, copy.validationPhone).optional(),
    message: z.string().min(10, copy.validationMessage),
    website: z.string().optional(),
  })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest<{ success: boolean }>("/api/contact", {
        method: "POST",
        data,
      }),
    onSuccess: () => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form_name: `localized_krs_${locale}`,
          method: "contact_form",
          page_path: window.location.pathname,
        })
      }
      setStatus({ type: "success", message: copy.success })
      queryClient.invalidateQueries({ queryKey: ["contact-submissions"] }).catch(() => undefined)
      form.reset(defaultValues)
    },
    onError: () => setStatus({ type: "error", message: copy.error }),
  })

  return (
    <div lang={locale}>
      {status && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`mb-4 rounded-md border px-4 py-3 text-sm ${status.type === "success" ? "border-teal-300/50 bg-teal-900/30 text-white" : "border-red-300/50 bg-red-950/40 text-white"}`}
        >
          {status.message}
        </p>
      )}

      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit((values) => {
            setStatus(null)
            mutation.mutate(values)
          })}
        >
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-white">{copy.fullName}</FormLabel>
              <FormControl><Input {...field} required className="h-11 border-white/20 bg-white/10 text-white" /></FormControl>
              <FormMessage className="text-rose-200" />
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-white">{copy.email}</FormLabel>
              <FormControl><Input {...field} type="email" required className="h-11 border-white/20 bg-white/10 text-white" /></FormControl>
              <FormMessage className="text-rose-200" />
            </FormItem>
          )} />

          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-white">{copy.phone}</FormLabel>
              <FormControl><Input {...field} type="tel" maxLength={20} placeholder={copy.optional} className="h-11 border-white/20 bg-white/10 text-white placeholder:text-slate-300" /></FormControl>
              <FormMessage className="text-rose-200" />
            </FormItem>
          )} />

          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-white">{copy.message}</FormLabel>
              <FormControl><Textarea {...field} required placeholder={copy.messagePlaceholder} className="min-h-28 border-white/20 bg-white/10 text-white placeholder:text-slate-300" /></FormControl>
              <FormMessage className="text-rose-200" />
            </FormItem>
          )} />

          <FormField control={form.control} name="website" render={({ field }) => (
            <FormItem className="hidden" aria-hidden="true">
              <FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl>
            </FormItem>
          )} />

          <Button type="submit" disabled={mutation.isPending} className="h-11 w-full bg-amber-600 font-semibold text-white hover:bg-amber-700">
            {mutation.isPending ? copy.submitting : copy.submit}
          </Button>

          <p className="text-xs leading-5 text-slate-200">
            {copy.policyBefore}
            <Link href={locale === "uk" ? "/uk/polityka-prywatnosci" : "/polityka-prywatnosci"} target="_blank" rel="noopener noreferrer" className="font-medium text-amber-300 underline underline-offset-2">
              {copy.policyLink}
            </Link>
            {copy.policyAfter}
          </p>
        </form>
      </Form>
    </div>
  )
}
