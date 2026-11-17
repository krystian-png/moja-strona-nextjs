import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import styles from "./landing.module.css"

export type PriceCardProps = {
  title: string
  description: string
  prices: { label?: string; value: string }[]
  items: string[]
  note?: string
  highlight?: string
  href: string
  linkLabel: string
}

export default function PriceCard({ title, description, prices, items, note, highlight, href, linkLabel }: PriceCardProps) {
  return (
    <article className={styles.priceCard}>
      <h3>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.prices}>
        {prices.map(({ label, value }) => (
          <p key={value} className={styles.price}>
            {label ? <span className={styles.priceLabel}>{label}</span> : null}
            <strong>{value}</strong>
          </p>
        ))}
      </div>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item}><Check aria-hidden="true" size={18} /><span>{item}</span></li>
        ))}
      </ul>
      {note ? <p className={styles.cardNote}>{note}</p> : null}
      {highlight ? <p className={styles.highlight}>{highlight}</p> : null}
      <p className={styles.cardLink}>
        {href.startsWith("#") ? (
          <a href={href}>{linkLabel} <ArrowRight aria-hidden="true" size={18} /></a>
        ) : (
          <Link href={href}>{linkLabel} <ArrowRight aria-hidden="true" size={18} /></Link>
        )}
      </p>
    </article>
  )
}
