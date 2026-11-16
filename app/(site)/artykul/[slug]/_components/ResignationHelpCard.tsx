"use client"

import { useEffect, useState } from "react"
import styles from "../resignation.module.css"

export default function ResignationHelpCard() {
  const [panelVisible, setPanelVisible] = useState(false)

  useEffect(() => {
    const panels = document.querySelectorAll("#resignation-content .contactPanel")
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
  }, [])

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
    <aside className={styles.helpSidebar} aria-label="Pomoc przy rezygnacji">
      <div className={styles.helpCard} data-hidden={panelVisible} aria-hidden={panelVisible}>
        <h2>Potrzebujesz pomocy przy rezygnacji?</h2>
        <p>Sprawdzimy, jaki tryb ma zastosowanie w Twojej sytuacji, i pomożemy przygotować dokumenty.</p>
        <button type="button" onClick={goToForm} disabled={panelVisible}>Napisz do nas</button>
      </div>
    </aside>
  )
}
