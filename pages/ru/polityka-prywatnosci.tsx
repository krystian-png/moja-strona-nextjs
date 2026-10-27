import { RuSeoHead } from "@/components/krs-language/RuSeoHead"
import LocalizedLegalPage from "@/components/krs-language/EnglishLegalPage"
import { ruPrivacy } from "@/lib/krs-legal-ru-privacy"
import { ruLanding } from "@/lib/krs-language-ru"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function RussianPrivacy({isProduction}:{isProduction:boolean}){return <><RuSeoHead page="privacy" isProduction={isProduction}/><LocalizedLegalPage document={ruPrivacy} t={ruLanding}/></>}
