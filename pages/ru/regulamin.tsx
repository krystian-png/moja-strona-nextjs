import { RuSeoHead } from "@/components/krs-language/RuSeoHead"
import LocalizedLegalPage from "@/components/krs-language/EnglishLegalPage"
import { ruTerms } from "@/lib/krs-legal-ru-terms"
import { ruLanding } from "@/lib/krs-language-ru"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function RussianTerms({isProduction}:{isProduction:boolean}){return <><RuSeoHead page="terms" isProduction={isProduction}/><LocalizedLegalPage document={ruTerms} t={ruLanding}/></>}
