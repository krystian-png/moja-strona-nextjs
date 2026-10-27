import type { Metadata } from "next"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { enLanding } from "@/lib/krs-language-en"

export const metadata: Metadata = {
  title: "Changes to the Polish Company Register (KRS) | ZmianaKRS",
  description: "KRS filings in Poland: board members, shareholders, share transfers, registered address, company documents and PKD codes. Legal assistance and documentation.",
  robots: { index: false, follow: false },
}

export default function EnglishKrsPreview() {
  return <KrsLocalizedLanding t={enLanding} />
}
