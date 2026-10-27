import Head from "next/head"
import { siteUrl, organizationSchema } from "@/lib/seo"
type PageKind="landing"|"terms"|"privacy"
const data:Record<PageKind,{path:string;title:string;description:string;index:boolean}>={
 landing:{path:"/en",title:"Changes to the Polish Company Register (KRS) | ZmianaKRS",description:"Legal assistance for changes in Poland's KRS: management board, shareholders, share transfers, company address, articles, PKD codes and incorporation via S24 or notary.",index:true},
 terms:{path:"/en/terms-of-service",title:"Terms of Service | ZmianaKRS",description:"English terms for ZmianaKRS company-registration legal services, fees, withdrawal, complaints and responsibilities.",index:false},
 privacy:{path:"/en/cookie-policy",title:"Privacy and Cookies Policy | ZmianaKRS",description:"English privacy and cookies policy: GDPR legal bases, recipients, retention, rights, website analytics and cookies.",index:false}
}
export function EnSeoHead({page,isProduction}:{page:PageKind;isProduction:boolean}){
 const d=data[page],url=`${siteUrl}${d.path}`;
 const schema={"@context":"https://schema.org","@type":"WebPage","@id":`${url}#webpage`,url,name:d.title,description:d.description,inLanguage:"en",publisher:{"@id":`${siteUrl}/#organization`}}
 return <Head>
  <title>{d.title}</title><meta name="description" content={d.description}/>
  <meta name="robots" content={isProduction ? (d.index ? "index,follow":"noindex,follow"):"noindex,nofollow"}/>
  <link rel="canonical" href={url}/>
  {page==="landing" && <>
   <link rel="alternate" hrefLang="en" href={url}/>
   <link rel="alternate" hrefLang="pl" href={siteUrl}/>
   <link rel="alternate" hrefLang="uk" href={`${siteUrl}/uk`}/><link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru`}/><link rel="alternate" hrefLang="zh-CN" href={`${siteUrl}/zh`}/>
   <link rel="alternate" hrefLang="x-default" href={siteUrl}/>
  </>}
  <meta property="og:type" content="website"/><meta property="og:title" content={d.title}/>
  <meta property="og:description" content={d.description}/><meta property="og:url" content={url}/>
  <meta property="og:locale" content="en_GB"/><meta property="og:site_name" content="ZmianaKRS"/>
  <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={d.title}/>
  <meta name="twitter:description" content={d.description}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  {page==="landing" && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...organizationSchema,contactPoint:{...organizationSchema.contactPoint,availableLanguage:["pl-PL","uk-UA","en"]}})}}/>}
 </Head>
}
