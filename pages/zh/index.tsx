import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { zhLanding } from "@/lib/krs-language-zh"
import { ZhSeoHead } from "@/components/krs-language/ZhSeoHead"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function ChineseLanding({isProduction}:{isProduction:boolean}){
 return <><ZhSeoHead page="landing" isProduction={isProduction}/><KrsLocalizedLanding t={zhLanding}/></>
}