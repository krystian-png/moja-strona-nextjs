import { ZhSeoHead } from "@/components/krs-language/ZhSeoHead"
import LocalizedLegalPage from "@/components/krs-language/EnglishLegalPage"
import { zhTerms } from "@/lib/krs-legal-zh-terms"
import { zhLanding } from "@/lib/krs-language-zh"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function ChineseTerms({isProduction}:{isProduction:boolean}){return <><ZhSeoHead page="terms" isProduction={isProduction}/><LocalizedLegalPage document={zhTerms} t={zhLanding}/></>}