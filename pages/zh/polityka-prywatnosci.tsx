import { ZhSeoHead } from "@/components/krs-language/ZhSeoHead"
import LocalizedLegalPage from "@/components/krs-language/EnglishLegalPage"
import { zhPrivacy } from "@/lib/krs-legal-zh-privacy"
import { zhLanding } from "@/lib/krs-language-zh"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function ChinesePrivacy({isProduction}:{isProduction:boolean}){return <><ZhSeoHead page="privacy" isProduction={isProduction}/><LocalizedLegalPage document={zhPrivacy} t={zhLanding}/></>}