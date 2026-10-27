import type { Metadata } from "next"
import UkrainianLegalPage from "@/components/krs-language/UkrainianLegalPage"
import { ukPrivacy } from "@/lib/krs-legal-uk-privacy"
export const metadata: Metadata = { title: "Політика конфіденційності та Cookies — ZmianaKRS", robots: { index: false, follow: false } }
export default function Page(){return <UkrainianLegalPage doc={ukPrivacy}/>}
