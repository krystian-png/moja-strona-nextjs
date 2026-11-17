import styles from "./landing.module.css"

type FeeTableProps = {
  caption: string
  rows: { label: string; value: string }[]
  note?: string
  plain?: boolean
}

export default function FeeTable({ caption, rows, note, plain = false }: FeeTableProps) {
  return (
    <div className={plain ? undefined : styles.feeCard}>
      <table className={styles.fees}>
        <caption>{caption}</caption>
        <thead>
          <tr><th scope="col">Rodzaj kosztu</th><th scope="col">Kwota</th></tr>
        </thead>
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
          ))}
        </tbody>
      </table>
      {note ? <p className={styles.feeNote}>{note}</p> : null}
    </div>
  )
}
