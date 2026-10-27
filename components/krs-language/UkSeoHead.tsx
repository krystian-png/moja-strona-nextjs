import Head from "next/head"
import { siteUrl, organizationSchema } from "@/lib/seo"
type PageKind = "landing" | "terms" | "privacy"
const data: Record<PageKind, {path:string;title:string;description:string}> = {
  landing:{path:"/uk",title:"Зміни в KRS у Польщі — юридичний супровід компаній | ZmianaKRS",description:"Зміни в KRS для компаній у Польщі: правління, учасники, продаж часток, місцезнаходження, зміни PKD і створення sp. z o.o. Юридичний супровід."},
  terms:{path:"/uk/regulamin",title:"Умови користування та юридичних послуг | ZmianaKRS",description:"Умови користування сервісом ZmianaKRS: послуги, оплата, відповідальність, відмова від договору та права клієнтів."},
  privacy:{path:"/uk/polityka-prywatnosci",title:"Політика конфіденційності та Cookies | ZmianaKRS",description:"Політика конфіденційності українською мовою. Інформація GDPR, обробка персональних даних і файли cookies."},
}
export function UkSeoHead({page, isProduction}:{page:PageKind;isProduction:boolean}){
 const {title,description,path}=data[page]
 const url=`${siteUrl}${path}`
 const schema = { "@context":"https://schema.org","@type":"WebPage","@id":`${url}#webpage`,name:title,description,url,inLanguage:"uk",isPartOf:{"@id":`${siteUrl}/#website`},publisher:{"@id":`${siteUrl}/#organization`}}
 return <Head>
   <title>{title}</title><meta name="description" content={description}/>
   <meta name="robots" content={isProduction ? "index,follow" : "noindex,nofollow"}/>
   <link rel="canonical" href={url}/>
   {page === "landing" && <>
     <link rel="alternate" hrefLang="uk" href={url}/>
     <link rel="alternate" hrefLang="pl" href={siteUrl}/>
     <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`}/><link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru`}/><link rel="alternate" hrefLang="zh-CN" href={`${siteUrl}/zh`}/>
     <link rel="alternate" hrefLang="x-default" href={siteUrl}/>
   </>}
   <meta property="og:type" content="website"/><meta property="og:title" content={title}/>
   <meta property="og:description" content={description}/><meta property="og:url" content={url}/>
   <meta property="og:site_name" content="ZmianaKRS"/><meta property="og:locale" content="uk_UA"/>
   <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={title}/>
   <meta name="twitter:description" content={description}/>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
   {page === "landing" && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...organizationSchema,contactPoint:{...organizationSchema.contactPoint,availableLanguage:["pl-PL","uk-UA","en"]}})}}/>}
 </Head>
}
