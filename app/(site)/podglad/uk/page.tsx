import type { Metadata } from "next"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { ukLanding } from "@/lib/krs-language-copy"

export const metadata: Metadata = {
  title: "Зміни в KRS у Польщі — юридичний супровід компаній | ZmianaKRS",
  description: "Зміна даних у KRS польської компанії: правління, учасники, продаж часток, адреса, договір товариства та PKD. Документи, заява, юридична допомога.",
  robots: { index: false, follow: false },
}

export default function UkrainianKrsPreview() {
  return <KrsLocalizedLanding t={ukLanding} />
}
