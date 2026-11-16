"use client"

import { useEffect, useState } from "react"
import styles from "../resignation.module.css"

type Entry = { id: string; text: string }

export default function ResignationToc({ mobile = false }: { mobile?: boolean }) {
  const [entries, setEntries] = useState<Entry[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const content = document.getElementById("resignation-content")
    const page = content?.closest<HTMLElement>("[data-resignation-page]")
    const navbar = page?.querySelector<HTMLElement>(":scope > header")
    if (!content || !page || !navbar) return

    const headings = Array.from(content.querySelectorAll<HTMLElement>("h2[id]"))
    setEntries(headings.map((heading) => {
      const copy = heading.cloneNode(true) as HTMLElement
      copy.querySelectorAll('[aria-hidden="true"], .icon, .anchor').forEach((node) => node.remove())
      return { id: heading.id, text: copy.textContent?.trim() || "" }
    }))

    let offset = 0
    let frame = 0
    let observer: IntersectionObserver | undefined
    const updateActive = () => {
      frame = 0
      let current = headings[0]
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= offset + 32) current = heading
        else break
      }
      setActiveId(current?.id || "")
    }
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActive)
    }
    const measure = () => {
      offset = navbar.getBoundingClientRect().height + 24
      if (!mobile) page.style.setProperty("--resignation-sticky-top", `${offset}px`)
      observer?.disconnect()
      observer = new IntersectionObserver(scheduleUpdate, {
        rootMargin: `-${offset}px 0px -50% 0px`,
      })
      headings.forEach((heading) => observer?.observe(heading))
      scheduleUpdate()
    }
    const resize = new ResizeObserver(measure)
    resize.observe(navbar)
    measure()
    // Also update when a long section crosses the activation line between headings.
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    return () => {
      resize.disconnect()
      observer?.disconnect()
      window.removeEventListener("scroll", scheduleUpdate)
      cancelAnimationFrame(frame)
      if (!mobile) page.style.removeProperty("--resignation-sticky-top")
    }
  }, [mobile])

  if (!entries.length) return null

  const links = (
    <nav aria-label="Spis treści" className={styles.tocNav}>
      {entries.map((entry) => (
        <a key={entry.id} href={`#${entry.id}`} aria-current={activeId === entry.id ? "location" : undefined}>
          {entry.text}
        </a>
      ))}
    </nav>
  )

  if (mobile) {
    return <details className={styles.mobileToc}><summary>Spis treści</summary>{links}</details>
  }
  return <aside className={styles.tocSidebar}><div className={styles.stickyToc}><h2>Spis treści</h2>{links}</div></aside>
}
