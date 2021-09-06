import React from "react"
import * as styles from "../styles/404style.module.scss"

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Sorry not found!</p>
      <div className={styles.ghost_canvas}>
        <div className={styles.ghost_body}>
          <div className={styles.ghost_body_copy}></div>
          <div className={styles.ghost_head}>
            <div className={styles.eye_left}></div>
            <div className={styles.eye_right}></div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.down_bubble}>
            <div className={styles.bubble_1}></div>
            <div className={styles.bubble_2}></div>
            <div className={styles.bubble_3}></div>
            <div className={styles.bubble_4}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
