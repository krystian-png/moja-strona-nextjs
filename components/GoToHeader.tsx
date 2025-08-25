import React from 'react'
import Link from 'next/link'

interface GoToHeaderProps {
  href: string
  label: string
}

export default function GoToHeader({ href, label }: GoToHeaderProps) {
  return <Link href={href}>{label}</Link>
}
