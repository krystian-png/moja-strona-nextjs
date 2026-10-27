import type { Metadata } from "next"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { zhLanding } from "@/lib/krs-language-zh"

export const metadata: Metadata = {
  title: "波兰 KRS 公司登记变更服务 | ZmianaKRS",
  description: "协助办理波兰 KRS 公司登记变更：管理层、股东、股权转让、注册地址、公司章程和 PKD 行业代码。法律服务与文件准备。",
  robots: { index: false, follow: false },
}

export default function ChineseKrsPreview() {
  return <KrsLocalizedLanding t={zhLanding} />
}
