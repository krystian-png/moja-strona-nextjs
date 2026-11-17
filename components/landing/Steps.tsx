import styles from "./landing.module.css"

type StepsProps = { items: { title: string; text: string }[] }

export default function Steps({ items }: StepsProps) {
  return (
    <ol className={styles.steps}>
      {items.map(({ title, text }, index) => (
        <li key={title}>
          <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  )
}
