import UkrainianLegalPage, { ukrainianLegalMetadata } from "@/components/krs-language/UkrainianLegalPage"
import { ukPrivacy } from "@/lib/krs-legal-uk-privacy"
export const metadata = ukrainianLegalMetadata("Політика конфіденційності та Cookies | ZmianaKRS", "Українська версія політики захисту персональних даних, GDPR, прав користувачів та cookies сервісу ZmianaKRS.")
export default function Page(){return <UkrainianLegalPage document={ukPrivacy} />}