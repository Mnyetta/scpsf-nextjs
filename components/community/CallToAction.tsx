import Link from "next/link"


import styles from "@/app/community-programs/community.module.css"

export default function CallToAction() {
  return (
    <section className={styles.cta}>

      <h2>Join Us in Restoring Justice</h2>

      <p>
        Help us expand access to justice for prisoners who are not covered by
        government legal aid services in Tanzania.
      </p>

      <Link href="/contact" className={styles.ctaButton}>
        Get Involved
      </Link>

    </section>
  )
}