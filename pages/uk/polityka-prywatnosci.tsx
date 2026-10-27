import UkrainianLegalPage from "@/components/krs-language/UkrainianLegalPage"
import { ukPrivacy } from "@/lib/krs-legal-uk-privacy"
import { UkSeoHead } from "@/components/krs-language/UkSeoHead"
export const getStaticProps = async () => ({props:{isProduction:process.env.VERCEL_ENV === "production"}})
export default function UkrainianPrivacy({isProduction}:{isProduction:boolean}){
 return <><UkSeoHead page="privacy" isProduction={isProduction}/><UkrainianLegalPage document={ukPrivacy}/></>
}
