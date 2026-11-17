import InlineContactForm from "@/app/(site)/uslugi/_components/InlineContactForm"
import ContactLinks from "./ContactLinks"
import styles from "./landing.module.css"

type ContactSectionProps = { heading: string; text: string }

export default function ContactSection({ heading, text }: ContactSectionProps) {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={`${styles.container} ${styles.contactGrid}`}>
        <div>
          <h2>{heading}</h2>
          <p>{text}</p>
          <ContactLinks tone="dark" />
        </div>
        <div className={styles.contactForm}><InlineContactForm className="max-w-none" /></div>
      </div>
    </section>
  )
}
