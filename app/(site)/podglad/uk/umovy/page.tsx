import type { Metadata } from "next"
import UkrainianLegalPage from "@/components/krs-language/UkrainianLegalPage"
import { ukTerms } from "@/lib/krs-legal-uk-terms"
export const metadata: Metadata = { title: "Умови користування — ZmianaKRS", robots: { index: false, follow: false } }
export default function Page(){return <UkrainianLegalPage doc={ukTerms}/>}
