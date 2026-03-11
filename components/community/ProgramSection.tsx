import Image from "next/image"
import styles from "@/app/community-programs/community.module.css"

interface Props {
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function ProgramSection({
  title,
  description,
  image,
  reverse,
}: Props) {
  return (
    <section
      className={`${styles.programSection} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <div className={styles.programImage}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
        />
      </div>

      <div className={styles.programContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}