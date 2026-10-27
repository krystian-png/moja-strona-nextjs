import type { Metadata } from "next"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { ruLanding } from "@/lib/krs-language-ru"

export const metadata: Metadata = {
  title: "Изменения в KRS в Польше — помощь компаниям | ZmianaKRS",
  description: "Внесение изменений в польский KRS: смена правления, участников, адреса, продажа долей, изменение договора общества и кодов PKD. Документы и заявление.",
  robots: { index: false, follow: false },
}

export default function RussianKrsPreview() {
  return <KrsLocalizedLanding t={ruLanding} />
}
