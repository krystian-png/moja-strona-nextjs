import { EnSeoHead } from "@/components/krs-language/EnSeoHead"
import EnglishLegalPage from "@/components/krs-language/EnglishLegalPage"
import { enPrivacy } from "@/lib/krs-legal-en-privacy"
import { enLanding } from "@/lib/krs-language-en"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function EnglishPrivacy({isProduction}:{isProduction:boolean}){
 return <><EnSeoHead page="privacy" isProduction={isProduction}/><EnglishLegalPage document={enPrivacy} t={enLanding}/></>
}
