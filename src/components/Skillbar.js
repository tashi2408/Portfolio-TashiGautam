import React from "react"
import * as styles from "../styles/skillround.module.scss"

export default function Skillbar({ value, label }) {
  return (
    <div className={styles.linearbar}>
      <div className={styles.bar}>
        <div className={styles.bar_color} style={{ width: `${value}%` }}>
          <p>{value} %</p>
        </div>
      </div>
      <h1>{label}</h1>
    </div>
  )
}
