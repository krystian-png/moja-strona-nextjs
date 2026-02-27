"use client"

import { useMemo, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { apiRequest } from "@/lib/queryClient"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactFormSchema = z.object({
  fullName: z.string().trim().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20, "Phone number can be at most 20 characters").optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
        message: "Your message has been sent. We will respond promptly.",
      })
      queryClient.invalidateQueries({ queryKey: ["contact-submissions"] }).catch(() => undefined)
      form.reset(defaultValues)
    },
    onError: (error: unknown) => {
      setSubmissionStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send the form. Please try again later.",
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
        title: "Phone",
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
        title: "Working hours",
        href: undefined,
        value: "Mon-Fri: 8:00-18:00",
      },
      {
        icon: MapPin,
        title: "Address",
        href: undefined,
        value: "ul. Wschodnia 24/3, 62-030 Luboń",
        helper: "Krystian Karpiuk Legal Counsel Office, NIP: 669-217-69-58",
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
              Contact – Experts in Polish Company Register (KRS) filings
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 text-center">
              Contact us regarding your KRS update application
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Need support with KRS filings? Contact our experts. We will respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 text-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions? Need a quote? Contact us today.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white text-center mb-6">Contact Form</h3>
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
                        <FormLabel className="text-white">Full name</FormLabel>
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
                        <FormLabel className="text-white">Email address</FormLabel>
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
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                          <Input
                            id="phone"
                            type="tel"
                            maxLength={20}
                            placeholder="Optional"
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
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your case…"
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
                        {isSubmitting ? "Sending..." : "Send enquiry"}
                      </Button>
                    </div>
                    <p className="text-center text-xs text-gray-300">
                      By submitting this form, you confirm that you have read the{" "}
                      <Link
                        href="https://zmianakrs.pl/en/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-amber-400/70 underline-offset-2 hover:text-amber-300"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </Form>
            </div>
            <Card className="bg-black/30 backdrop-blur-sm border border-white/20 p-6">
              <CardHeader className="mb-6">
                <CardTitle className="text-white text-lg">Contact details</CardTitle>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in touch with us</h2>

            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Get in touch with us – professional support with KRS changes
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Need support with updating an entry in the Polish Company Register (KRS)? Do you want to file an
                  application to update KRS data or prepare the required company registration documents? Contact us — we
                  will answer all your questions, recommend the best approach and prepare an individual offer tailored to
                  your needs.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We specialise in comprehensive handling of KRS filings for companies and accounting offices. We support
                clients in preparing resolutions for KRS, submitting changes electronically through the S24 system, and
                managing the full process of updating the company’s registration data.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-amber-400 mb-3">
                  Why contact us by email or phone?
                </h4>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>Individual pricing and flexible cooperation terms</li>
                  <li>Professional guidance at every stage of the process</li>
                  <li>Timely and reliable handling of KRS filings</li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Support with changes of the management board in KRS, updates to company data, amendments to the articles
                of association filed with KRS and other register entries. Contact us today to ensure a smooth, secure and
                professional process of filing KRS updates for your company or your clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
