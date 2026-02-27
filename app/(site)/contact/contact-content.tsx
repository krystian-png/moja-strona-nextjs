"use client"

import { useMemo, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { apiRequest } from "@/lib/queryClient"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

const contactFormSchema = z.object({
  fullName: z.string().trim().min(3, "Imię i nazwisko musi mieć co najmniej 3 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().max(20, "Numer telefonu może mieć maksymalnie 20 znaków").optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  website: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

type ContactFormPayload = ContactFormData

const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
}

export default function ContactPageContent() {
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

  const contactDetails = useMemo(
    () => [
      {
        icon: Phone,
        title: "Telefon",
        href: "tel:+48572234779",
        value: "+48 572 234 779",
      },
      {
        icon: Mail,
        title: "Email",
        href: "mailto:biuro@zmianakrs.pl",
        value: "biuro@zmianakrs.pl",
      },
      {
        icon: Clock,
        title: "Godziny Pracy",
        href: undefined,
        value: "Pon-Pt: 8:00-18:00",
      },
      {
        icon: MapPin,
        title: "Adres",
        href: undefined,
        value: "ul. Wschodnia 24/3, 62-030 Luboń",
        helper: "Krystian Karpiuk Kancelaria Radcy Prawnego, NIP: 669-217-69-58",
      },
    ],
    []
  )

  return (
    <main className="relative flex flex-col">
      <section className="relative pt-20 pb-6 text-white overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Kontakt - Eksperci ds. zmian wpisu w <span className="text-amber-400">KRS</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 text-center">
              Skontaktuj się w sprawie wniosku o zmianę wpisu w KRS
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Potrzebujesz pomocy z KRS? Skontaktuj się z naszymi ekspertami. Odpowiemy bezzwłocznie.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 text-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Skontaktuj Się z Nami</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami już dziś.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Formularz Kontaktowy</h3>
              {submissionStatus ? (
                <div
                  className={`mb-6 rounded-md border px-4 py-3 text-sm ${
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Imię i nazwisko</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
                        <FormLabel className="text-white">Adres email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
                        <FormLabel className="text-white">Telefon</FormLabel>
                        <FormControl>
                          <Input
                            id="phone"
                            type="tel"
                            maxLength={20}
                            placeholder="Opcjonalnie"
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
                        <FormLabel className="text-white">Wiadomość</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Opisz swoją sprawę..."
                            className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-center">
                      <Button type="submit" className="w-full sm:w-1/2 bg-amber-600 hover:bg-amber-700 text-white" disabled={isSubmitting}>
                        {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                      </Button>
                    </div>
                    <p className="text-center text-xs text-gray-300">
                      Wysyłając formularz, potwierdzasz zapoznanie się z{" "}
                      <Link
                        href="https://zmianakrs.pl/polityka-prywatnosci"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-amber-400/70 underline-offset-2 hover:text-amber-300"
                      >
                        Polityką prywatności
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </Form>
            </div>
            <Card className="bg-black/30 backdrop-blur-sm border border-white/20 p-6">
              <CardHeader className="mb-6">
                <CardTitle className="text-white text-lg">Dane Kontaktowe</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
                {contactDetails.map(({ icon: Icon, title, value, helper, href }) => (
                  <div key={title} className="flex items-center justify-center sm:justify-start text-left">
                    <Icon className="h-5 w-5 text-amber-400 mr-3 shrink-0" />
                    <div>
                      <div className="font-medium text-white text-sm">{title}</div>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-300 text-sm hover:text-amber-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-gray-300 text-sm">{value}</div>
                      )}
                      {helper ? (
                        <div className="text-gray-400 text-xs mt-1">{helper}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-none">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skontaktuj się z nami</h2>

            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Skontaktuj się z nami – profesjonalna pomoc w zmianach KRS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Potrzebujesz wsparcia przy zmianie wpisu w KRS? Chcesz złożyć wniosek o zmianę w KRS lub przygotować wymagane
                  dokumenty rejestrowe spółki? Zapraszamy do kontaktu – odpowiemy na wszystkie pytania, doradzimy najlepsze
                  rozwiązanie i przygotujemy indywidualną ofertę dostosowaną do Twoich potrzeb. Zobacz nasze
                  <a href="/uslugi" className="text-amber-400 hover:text-amber-300 underline"> usługi zmian wpisu w KRS</a>
                  i<a href="/cennik" className="text-amber-400 hover:text-amber-300 underline"> cennik obsługi KRS</a>.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Specjalizujemy się w kompleksowej obsłudze wniosków KRS dla spółek i biur rachunkowych. Pomagamy w przygotowaniu
                uchwał do KRS, elektronicznym zgłoszeniu zmian do KRS przez system S24, a także w pełnym procesie aktualizacji danych
                rejestracyjnych spółki. Poznaj naszą
                <a href="/o-nas" className="text-amber-400 hover:text-amber-300 underline"> historię i doświadczenie</a>
                oraz przeczytaj<a href="/blog" className="text-amber-400 hover:text-amber-300 underline"> artykuły o zmianach w KRS</a>.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-amber-400 mb-3">
                  Dlaczego warto do nas napisać lub zadzwonić?
                </h4>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>Indywidualna wycena i elastyczne warunki współpracy</li>
                  <li>Profesjonalne doradztwo na każdym etapie procesu</li>
                  <li>Terminowa i rzetelna obsługa wniosków KRS</li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Wsparcie przy zmianie zarządu w KRS, zmianie danych spółki, umowy spółki KRS i innych wpisach do rejestru. Skontaktuj
                się z nami już dziś i zapewnij swojej firmie lub klientom sprawny, bezpieczny i profesjonalny proces zgłoszenia zmian
                do KRS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
