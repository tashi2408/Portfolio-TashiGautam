import React from "react"
import * as styles from "../styles/skillround.module.scss"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function SkillRound({ value, label }) {
  return (
    <div className={styles.roundbar}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#f5f5f5",
          pathColor: "#00c9b7",
          trailColor: "transparent",
        })}
      />
      <h1>{label}</h1>
    </div>
  )
}
