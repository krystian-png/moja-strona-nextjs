import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { ukLanding } from "@/lib/krs-language-copy"
import { UkSeoHead } from "@/components/krs-language/UkSeoHead"
export const getStaticProps = async () => ({props:{isProduction:process.env.VERCEL_ENV === "production"}})
export default function UkrainianHome({isProduction}:{isProduction:boolean}) {
 return <><UkSeoHead page="landing" isProduction={isProduction}/><KrsLocalizedLanding t={ukLanding}/></>
}
