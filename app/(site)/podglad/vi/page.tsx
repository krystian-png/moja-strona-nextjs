import type { Metadata } from "next"
import KrsLocalizedLanding from "@/components/krs-language/KrsLocalizedLanding"
import { viLanding } from "@/lib/krs-language-vi"

export const metadata: Metadata = {
  title: "Thay đổi thông tin KRS tại Ba Lan | ZmianaKRS",
  description: "Hỗ trợ thay đổi đăng ký KRS của công ty Ba Lan: ban quản lý, cổ đông, chuyển nhượng vốn, địa chỉ, điều lệ và mã ngành PKD. Tư vấn và hồ sơ pháp lý.",
  robots: { index: false, follow: false },
}

export default function VietnameseKrsPreview() {
  return <KrsLocalizedLanding t={viLanding} />
}
