import React from "react"
import * as styles from "../styles/svg.module.scss"

export default function SVG() {
  return (
    <div className={styles.svg_file}>
      <div className={styles.wrap_2}>
        <div className={`${styles.span_p} ${styles.span_1}`}></div>
        <div className={`${styles.span_p} ${styles.span_2}`}></div>
        <div className={`${styles.span_p} ${styles.span_3}`}></div>
        <div className={`${styles.span_p} ${styles.span_4}`}></div>
      </div>
    </div>
  )
}
