import { permanentRedirect } from "next/navigation"

interface BlogRedirectProps {
  params: { slug: string }
}

export default function BlogRedirect({ params }: BlogRedirectProps) {
  permanentRedirect(`/artykul/${params.slug}`)
}
