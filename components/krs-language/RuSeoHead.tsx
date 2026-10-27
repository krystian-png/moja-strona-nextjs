import Head from "next/head"
import { siteUrl, organizationSchema } from "@/lib/seo"
type PageKind="landing"|"terms"|"privacy"
const data:Record<PageKind,{path:string;title:string;description:string}>={
landing:{path:"/ru",title:"Изменения в KRS в Польше — юридическая помощь компаниям | ZmianaKRS",description:"Регистрация изменений польских компаний в KRS: директор, участники, продажа долей, адрес, PKD и создание sp. z o.o. через S24 или нотариуса."},
terms:{path:"/ru/regulamin",title:"Условия оказания услуг | ZmianaKRS",description:"Русская версия правил сервиса ZmianaKRS, включая оплату, ответственность, жалобы и отказ от договора."},
privacy:{path:"/ru/polityka-prywatnosci",title:"Политика конфиденциальности и cookies | ZmianaKRS",description:"Информация на русском о GDPR, обработке персональных данных, правах клиентов и файлах cookies."}
}
export function RuSeoHead({page,isProduction}:{page:PageKind;isProduction:boolean}){
const d=data[page],url=`${siteUrl}${d.path}`,schema={"@context":"https://schema.org","@type":"WebPage",url,name:d.title,description:d.description,inLanguage:"ru",publisher:{"@id":`${siteUrl}/#organization`}}
return <Head><title>{d.title}</title><meta name="description" content={d.description}/>
<meta name="robots" content={isProduction?"index,follow":"noindex,nofollow"}/><link rel="canonical" href={url}/>
{page==="landing"&&<><link rel="alternate" hrefLang="ru" href={url}/><link rel="alternate" hrefLang="pl" href={siteUrl}/><link rel="alternate" hrefLang="en" href={`${siteUrl}/en`}/><link rel="alternate" hrefLang="uk" href={`${siteUrl}/uk`}/><link rel="alternate" hrefLang="zh-CN" href={`${siteUrl}/zh`}/><link rel="alternate" hrefLang="vi" href={`${siteUrl}/vi`}/><link rel="alternate" hrefLang="x-default" href={siteUrl}/></>}
<meta property="og:type" content="website"/><meta property="og:title" content={d.title}/><meta property="og:description" content={d.description}/><meta property="og:url" content={url}/><meta property="og:locale" content="ru_RU"/>
<meta name="twitter:card" content="summary"/><meta name="twitter:title" content={d.title}/><meta name="twitter:description" content={d.description}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
{page==="landing"&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...organizationSchema,contactPoint:{...organizationSchema.contactPoint,availableLanguage:["pl-PL","en","uk-UA","ru"]}})}}/>}</Head>}
