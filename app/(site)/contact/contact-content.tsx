"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const phoneValidation = z
  .string({ required_error: "Numer telefonu jest wymagany" })
  .min(1, "Numer telefonu jest wymagany")
  .refine((val) => {
    const cleanPhone = val.replace(/[\s-]/g, "");
    return /^(\+48\d{9}|\d{9})$/.test(cleanPhone);
  }, "Nieprawidłowy format numeru telefonu. Prawidłowy format: +48123456789 lub 123456789");

const contactFormSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: phoneValidation,
  service: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę na przetwarzanie danych osobowych",
  }),
  captcha: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactFormPayload = ContactFormData & { name: string };

const serviceOptions = [
  { value: "zmiana-wpisu-w-krs", label: "Zmiana wpisu w KRS" },
  { value: "obsluga-dokumentow-krs", label: "Obsługa dokumentów rejestrowych" },
  { value: "inne-zapytanie", label: "Inne zapytanie dotyczące KRS" },
];

const defaultValues: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  privacyConsent: false,
  captcha: "",
};

export default function ContactPageContent() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: "" });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `${num1} + ${num2} = ?`;
    const answer = String(num1 + num2);
    setCaptchaQuestion({ question, answer });
    return answer;
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const submitContactMutation = useMutation({
    mutationFn: (data: ContactFormPayload) =>
      apiRequest<{ success: boolean }>("/api/contact", { method: "POST", data }),
    onSuccess: () => {
      toast({
        title: "Dziękujemy za wiadomość",
        description: "Skontaktujemy się z Tobą najszybciej jak to możliwe.",
      });
      queryClient.invalidateQueries({ queryKey: ["contact-submissions"] }).catch(() => undefined);
      form.reset(defaultValues);
      generateCaptcha();
    },
    onError: (error: unknown) => {
      toast({
        title: "Nie udało się wysłać formularza",
        description: error instanceof Error ? error.message : "Spróbuj ponownie później.",
        variant: "destructive",
      });
      generateCaptcha();
    },
  });

  const onSubmit = useCallback(
    (data: ContactFormData) => {
      form.clearErrors("captcha");

      if (!data.captcha || data.captcha.trim() === "") {
        form.setError("captcha", { type: "manual", message: "Potwierdź, że nie jesteś robotem" });
        return;
      }
      if (data.captcha !== captchaQuestion.answer) {
        form.setError("captcha", { type: "manual", message: "Nieprawidłowa odpowiedź na pytanie kontrolne" });
        generateCaptcha();
        form.setValue("captcha", "");
        return;
      }

      const submitData: ContactFormPayload = { ...data, name: `${data.firstName} ${data.lastName}`.trim() };
      submitContactMutation.mutate(submitData);
    },
    [captchaQuestion.answer, form, generateCaptcha, submitContactMutation]
  );

  const isSubmitting = submitContactMutation.isPending;

  const contactDetails = useMemo(
    () => [
      { icon: Phone, title: "Telefon", href: "tel:+48572234779", value: "+48 572 234 779" },
      { icon: Mail, title: "Email", href: "mailto:biuro@zmianakrs.pl", value: "biuro@zmianakrs.pl" },
      { icon: Clock, title: "Godziny Pracy", href: undefined, value: "Pon-Pt: 8:00-18:00" },
      {
        icon: MapPin,
        title: "Adres",
        href: undefined,
        value: "ul. Wschodnia 24/3, 62-030 Luboń",
        helper: "Krystian Karpiuk Kancelaria Radcy Prawnego, NIP: 669-217-69-58",
      },
    ],
    []
  );

  return (
    <>
      {/* HERO */}
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

      {/* FORM */}
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

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* lewa kolumna */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Imię</FormLabel>
                              <FormControl>
                                <Input {...field} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
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
                              <FormLabel className="text-white">Nazwisko</FormLabel>
                              <FormControl>
                                <Input {...field} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
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
                              <Input type="email" {...field} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
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
                                placeholder="+48123456789 lub 123456789"
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
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Zakres zapytania (opcjonalnie)</FormLabel>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                  <SelectValue placeholder="Wybierz usługę" />
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

                    {/* prawa kolumna */}
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Wiadomość</FormLabel>
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
                        name="captcha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Pytanie kontrolne: {captchaQuestion.question}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Wpisz odpowiedź"
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

                  {/* zgoda + submit */}
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="privacyConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="h-5 w-5 shrink-0 border-2 border-white/70 bg-white/5 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600 mt-1"
                              required
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white text-xs leading-relaxed">
                              Oświadczam, że zapoznałem/am się z treścią Polityki Prywatności i Cookies
                              dostępnych na stronie www.zmianakrs.pl i wyrażam dobrowolną i świadomą zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu przez:
                              <br /><br />
                              <strong>Krystian Karpiuk Kancelaria Radcy Prawnego</strong>, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58 w celu:
                              <br />
                              a) udzielenia odpowiedzi na moje zapytanie przesłane za pośrednictwem formularza kontaktowego,
                              <br />
                              b) przedstawienia oferty dotyczącej świadczonych usług,
                              <br />
                              c) komunikacji ze mną w sprawach związanych z moim zapytaniem.
                              <br /><br />
                              Rozumiem, że w każdej chwili mogę wycofać tę zgodę, kontaktując się z Administratorem danych osobowych pod adresem kontakt@zmianakrs.pl, a wycofanie zgody nie wpłynie na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <Button type="submit" className="w-1/2 bg-amber-600 hover:bg-amber-700 text-white" disabled={isSubmitting}>
                        {isSubmitting ? "Wysyłanie..." : "Wyślij Zapytanie"}
                      </Button>
                    </div>
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
                        <a href={href} className="text-gray-300 text-sm hover:text-amber-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-gray-300 text-sm">{value}</div>
                      )}
                      {helper ? <div className="text-gray-400 text-xs mt-1">{helper}</div> : null}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO-teksty */}
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
                  {" "}<a href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">usługi zmian wpisu w KRS</a>
                  {" "}i{" "}<a href="/cennik" className="text-amber-400 hover:text-amber-300 underline">cennik obsługi KRS</a>.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Specjalizujemy się w kompleksowej obsłudze wniosków KRS dla spółek i biur rachunkowych. Pomagamy w przygotowaniu
                uchwał do KRS, elektronicznym zgłoszeniu zmian do KRS przez system S24, a także w pełnym procesie aktualizacji danych
                rejestracyjnych spółki. Poznaj naszą
                {" "}<a href="/o-nas" className="text-amber-400 hover:text-amber-300 underline">historię i doświadczenie</a>
                {" "}oraz przeczytaj{" "}<a href="/blog" className="text-amber-400 hover:text-amber-300 underline">artykuły o zmianach w KRS</a>.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-amber-400 mb-3">Dlaczego warto do nas napisać lub zadzwonić?</h4>
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
    </>
  );
}
