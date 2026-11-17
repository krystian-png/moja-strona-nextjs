import { Mail, Phone } from "lucide-react"
import styles from "./landing.module.css"

type ContactLinksProps = { tone?: "light" | "dark" }

export default function ContactLinks({ tone = "light" }: ContactLinksProps) {
  return (
    <address className={`${styles.contactLinks} ${tone === "dark" ? styles.dark : ""}`}>
      <a href="tel:+48572234779" className={styles.contactLink}>
        <span className={styles.contactIcon}><Phone aria-hidden="true" size={20} /></span>
        <span>572 234 779</span>
      </a>
      <a href="mailto:biuro@zmianakrs.pl" className={styles.contactLink}>
        <span className={styles.contactIcon}><Mail aria-hidden="true" size={20} /></span>
        <span>biuro@zmianakrs.pl</span>
      </a>
    </address>
  )
}
