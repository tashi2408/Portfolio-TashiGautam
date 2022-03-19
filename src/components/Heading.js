import React from "react"
import * as styles from "../styles/heading.module.scss"

export default function Heading({ text }) {
  return (
    <div className={styles.heading} data-aos="fade-right">
      <div className={styles.bold}>
        {text}
        <div className={styles.cursive}>{text}</div>
      </div>
    </div>
  )
}
