import UkrainianLegalPage from "@/components/krs-language/UkrainianLegalPage"
import { ukTerms } from "@/lib/krs-legal-uk-terms"
import { UkSeoHead } from "@/components/krs-language/UkSeoHead"
export const getStaticProps = async () => ({props:{isProduction:process.env.VERCEL_ENV === "production"}})
export default function UkrainianTerms({isProduction}:{isProduction:boolean}){
 return <><UkSeoHead page="terms" isProduction={isProduction}/><UkrainianLegalPage document={ukTerms}/></>
}
