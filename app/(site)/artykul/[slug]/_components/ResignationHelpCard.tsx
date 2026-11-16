"use client"

import { useEffect, useState } from "react"
import styles from "../resignation.module.css"

export default function ResignationHelpCard({
  href,
  contentId = "resignation-content",
  panelSelector = ".contactPanel",
  heading = "Potrzebujesz pomocy przy rezygnacji?",
  text = "Sprawdzimy, jaki tryb ma zastosowanie w Twojej sytuacji, i pomożemy przygotować dokumenty.",
  buttonLabel = "Napisz do nas",
  ariaLabel = "Pomoc przy rezygnacji",
}: { href?: string; contentId?: string; panelSelector?: string; heading?: string; text?: string; buttonLabel?: string; ariaLabel?: string }) {
  const [panelVisible, setPanelVisible] = useState(false)

  useEffect(() => {
    const panels = document.getElementById(contentId)?.querySelectorAll(panelSelector) ?? []
    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      })
      setPanelVisible(visible.size > 0)
    })
    panels.forEach((panel) => observer.observe(panel))
    return () => observer.disconnect()
  }, [contentId, panelSelector])

  const goToForm = () => {
    const panel = document.getElementById("formularz-kontaktowy")
    if (!panel) return
    const target = panel.querySelector<HTMLElement>('input:not([type="hidden"]):not([tabindex="-1"]), textarea')
      || panel.querySelector<HTMLElement>("h3")
    if (target) {
      if (!target.matches("input, textarea")) target.tabIndex = -1
      target.focus({ preventScroll: true })
    }
    panel.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    })
  }

  return (
    <aside className={styles.helpSidebar} aria-label={ariaLabel}>
      <div className={styles.helpCard} data-hidden={panelVisible} aria-hidden={panelVisible}>
        <h2>{heading}</h2>
        <p>{text}</p>
        {href ? (
          <a href={href} onClick={(event) => { event.preventDefault(); goToForm() }} tabIndex={panelVisible ? -1 : undefined}>{buttonLabel}</a>
        ) : (
          <button type="button" onClick={goToForm} disabled={panelVisible}>{buttonLabel}</button>
        )}
      </div>
    </aside>
  )
}
