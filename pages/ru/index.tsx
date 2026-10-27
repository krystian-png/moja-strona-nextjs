import { RuSeoHead } from "@/components/krs-language/RuSeoHead"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { ruLanding } from "@/lib/krs-language-ru"
export const getStaticProps=async()=>({props:{isProduction:process.env.VERCEL_ENV==="production"}})
export default function RussianLanding({isProduction}:{isProduction:boolean}){return <><RuSeoHead page="landing" isProduction={isProduction}/><KrsLocalizedLanding t={ruLanding}/></>}
