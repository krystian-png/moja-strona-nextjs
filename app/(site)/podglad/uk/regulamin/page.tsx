import UkrainianLegalPage, { ukrainianLegalMetadata } from "@/components/krs-language/UkrainianLegalPage"
import { ukTerms } from "@/lib/krs-legal-uk-terms"
export const metadata = ukrainianLegalMetadata("Умови користування та юридичних послуг | ZmianaKRS", "Українська версія умов користування сервісом і юридичного супроводу KRS, оплати, відповідальності та відмови від договору.")
export default function Page(){return <UkrainianLegalPage document={ukTerms} />}