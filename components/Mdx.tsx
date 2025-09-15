"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import MdxComponents from "./MdxComponents"

interface MdxProps {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={MdxComponents} />
}
