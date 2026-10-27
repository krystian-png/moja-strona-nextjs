import { EnSeoHead } from "@/components/krs-language/EnSeoHead"
import EnglishLegalPage from "@/components/krs-language/EnglishLegalPage"
import { enTerms } from "@/lib/krs-legal-en-terms"
import { enLanding } from "@/lib/krs-language-en"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function EnglishTerms({isProduction}:{isProduction:boolean}){
 return <><EnSeoHead page="terms" isProduction={isProduction}/><EnglishLegalPage document={enTerms} t={enLanding}/></>
}
