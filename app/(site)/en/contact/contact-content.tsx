"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { apiRequest } from "@/lib/queryClient"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the processing of personal data",
  }),
  captcha: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

type ContactFormPayload = ContactFormData & { name: string }

const serviceOptions = [
  { value: "zmiana-wpisu-w-krs", label: "KRS entry update" },
  { value: "obsluga-dokumentow-krs", label: "KRS document handling" },
  { value: "inne-zapytanie", label: "Other KRS enquiry" },
]

const defaultValues: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  privacyConsent: false,
  captcha: "",
}

export default function ContactPageContent() {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: "" })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion({
      question: `${num1} + ${num2} = ?`,
      answer: (num1 + num2).toString(),
    })
  }, [])

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion({
      question: `${num1} + ${num2} = ?`,
      answer: (num1 + num2).toString(),
    })
  }, [])

  const submitContactMutation = useMutation({
    mutationFn: (data: ContactFormPayload) =>
      apiRequest<{ success: boolean }>("/api/contact", {
        method: "POST",
        data,
      }),
    onSuccess: () => {
      toast({
        title: "Thank you for your message",
        description: "We will respond as soon as possible.",
      })
      queryClient.invalidateQueries({ queryKey: ["contact-submissions"] }).catch(() => undefined)
      form.reset(defaultValues)
      generateCaptcha()
    },
    onError: (error: unknown) => {
      toast({
        title: "Unable to send the form",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
      generateCaptcha()
    },
  })

  const onSubmit = (data: ContactFormData) => {
    form.clearErrors("captcha")

    if (!data.captcha || data.captcha.trim() === "") {
      form.setError("captcha", {
        type: "manual",
        message: "Please confirm you are not a robot",
      })
      return
    }

    if (data.captcha !== captchaQuestion.answer) {
      form.setError("captcha", {
        type: "manual",
        message: "Incorrect answer to the security question",
      })
      const num1 = Math.floor(Math.random() * 10) + 1
      const num2 = Math.floor(Math.random() * 10) + 1
      const question = `${num1} + ${num2} = ?`
      const answer = (num1 + num2).toString()
      setCaptchaQuestion({ question, answer })

      form.setValue("captcha", "")
      return
    }

    const submitData = {
      ...data,
      name: `${data.firstName} ${data.lastName}`.trim(),
    }

    submitContactMutation.mutate(submitData)
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
              Get in touch about updating an entry in the Polish Company Register (KRS)
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Need help with KRS? Contact our experts. We will respond promptly.
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
              <h3 className="text-xl font-bold text-white mb-6">Contact Form</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">First name</FormLabel>
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
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Last name</FormLabel>
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
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
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
                            <FormLabel className="text-white">Phone (optional)</FormLabel>
                            <FormControl>
                              <Input
                                id="phone"
                                type="tel"
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
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Subject of enquiry (optional)</FormLabel>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                  {serviceOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your case…"
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
                        name="captcha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Security question: {captchaQuestion.question}
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter your answer"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="privacyConsent"
                      render={({ field }) => (
                        <FormItem
                          style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "12px" }}
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              style={{ marginTop: "4px", minWidth: "16px", minHeight: "16px" }}
                              className="border-amber-500 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                            />
                          </FormControl>
                          <div style={{ flex: 1 }}>
                            <FormLabel className="text-white text-xs leading-relaxed">
                              I declare that I have read the{" "}
                              <Link
                                href="/en/cookie-policy"
                                className="text-amber-400 hover:text-amber-300 underline"
                              >
                                Privacy and Cookies Policy
                              </Link>{" "}
                              available on the website www.zmianakrs.pl and I voluntarily and knowingly consent to the
                              processing of my personal data provided in the above contact form by:
                              <br />
                              <br />
                              <strong>Krystian Karpiuk Kancelaria Radcy Prawnego</strong>, ul. Wschodnia 24/3, 62-030 Luboń,
                              NIP: 669-217-69-58 for the purpose of:
                              <br />
                              a) responding to my enquiry submitted via the contact form,
                              <br />
                              b) presenting an offer regarding the provided services,
                              <br />
                              c) communicating with me in matters related to my enquiry.
                              <br />
                              <br />
                              I understand that I may withdraw this consent at any time by contacting the Personal Data
                              Controller at kontakt@zmianakrs.pl, and withdrawal of consent will not affect the lawfulness of
                              processing carried out on the basis of consent before its withdrawal.
                            </FormLabel>
                            <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-300">
                              <Link
                                href="/en/terms-of-service"
                                className="underline transition-colors hover:text-amber-300"
                              >
                                Terms of Service
                              </Link>
                              <Link
                                href="/en/cookie-policy"
                                className="underline transition-colors hover:text-amber-300"
                              >
                                Privacy and Cookies Policy
                              </Link>
                            </div>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="w-1/2 bg-amber-600 hover:bg-amber-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send enquiry"}
                      </Button>
                    </div>
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
