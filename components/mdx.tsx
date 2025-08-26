import { useMDXComponent } from "next-contentlayer/hooks"
import MDXComponents from "./mdx-components"

interface MdxProps {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={MDXComponents} />
}
