import { EnSeoHead } from "@/components/krs-language/EnSeoHead"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { enLanding } from "@/lib/krs-language-en"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function EnglishLanding({isProduction}:{isProduction:boolean}){
 return <><EnSeoHead page="landing" isProduction={isProduction}/><KrsLocalizedLanding t={enLanding}/></>
}
