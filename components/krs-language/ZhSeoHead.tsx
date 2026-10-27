import Head from "next/head"
import { siteUrl, organizationSchema } from "@/lib/seo"
type Kind = "landing" | "terms" | "privacy"
const data:Record<Kind,{path:string,title:string,description:string}> = {
 landing:{path:"/zh",title:"波兰公司KRS登记变更与法律服务 | ZmianaKRS",description:"在波兰办理公司KRS变更：董事及股东变更、股权转让、公司地址、PKD行业代码及S24公司设立。提供中文书面咨询，由波兰法律顾问处理。"},
 terms:{path:"/zh/regulamin",title:"服务条款 | ZmianaKRS",description:"波兰ZmianaKRS公司登记与法律服务的简体中文服务条款：委托程序、费用、责任、投诉和消费者合同撤回权。"},
 privacy:{path:"/zh/polityka-prywatnosci",title:"隐私及Cookie政策 | ZmianaKRS",description:"了解ZmianaKRS有关GDPR、个人信息、数据权利及Cookie技术的简体中文隐私政策。"}
}
export function ZhSeoHead({page,isProduction}:{page:Kind;isProduction:boolean}){
 const d=data[page],url=`${siteUrl}${d.path}`;
 const schema={"@context":"https://schema.org","@type":"WebPage","@id":`${url}#webpage`,url,name:d.title,description:d.description,inLanguage:"zh-Hans",publisher:{"@id":`${siteUrl}/#organization`}}
 return <Head><title>{d.title}</title><meta name="description" content={d.description}/>
 <meta name="robots" content={isProduction?"index,follow":"noindex,nofollow"}/>
 <link rel="canonical" href={url}/>
 {page==="landing"&&<><link rel="alternate" hrefLang="zh-CN" href={url}/><link rel="alternate" hrefLang="pl" href={siteUrl}/><link rel="alternate" hrefLang="en" href={`${siteUrl}/en`}/><link rel="alternate" hrefLang="uk" href={`${siteUrl}/uk`}/><link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru`}/><link rel="alternate" hrefLang="vi" href={`${siteUrl}/vi`}/><link rel="alternate" hrefLang="x-default" href={siteUrl}/></>}
 <meta property="og:type" content="website"/><meta property="og:title" content={d.title}/><meta property="og:description" content={d.description}/><meta property="og:url" content={url}/><meta property="og:locale" content="zh_CN"/><meta property="og:site_name" content="ZmianaKRS"/>
 <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={d.title}/><meta name="twitter:description" content={d.description}/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
 {page==="landing"&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...organizationSchema,contactPoint:{...organizationSchema.contactPoint,availableLanguage:["pl-PL","en","uk-UA","ru","zh-CN"]}})}}/>}
 </Head>
}