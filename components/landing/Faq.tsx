import styles from "./landing.module.css"

type FaqProps = { items: { question: string; answer: string }[] }

export default function Faq({ items }: FaqProps) {
  return (
    <div className={styles.faq}>
      {items.map(({ question, answer }) => (
        <details key={question}>
          <summary><h3>{question}</h3></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  )
}
