import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/social.module.scss"
import { AiFillGithub, AiFillInstagram, AiOutlineGoogle } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export default function SocialIcons() {
  return (
    <div>
      <div className={styles.social_btns}>
        <a
          href="https://github.com/tashi2408"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.github}`}
        >
          <AiFillGithub className={styles.fa} />
        </a>

        <a
          className={`${styles.btn} ${styles.instagram}`}
          href="https://www.instagram.com/_tashii_2408/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className={styles.fa} />
        </a>
        <a
          className={`${styles.btn} ${styles.google}`}
          href="mailto: tashub3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGoogle className={styles.fa} />
        </a>
        <a
          className={`${styles.btn} ${styles.linkedin}`}
          href="https://www.linkedin.com/in/tashi-gautam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={styles.fa} />
        </a>
      </div>
    </div>
  )
}
