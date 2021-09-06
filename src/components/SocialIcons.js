import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/social.module.scss"
import { AiFillGithub, AiFillInstagram, AiOutlineGoogle } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export default function SocialIcons() {
  return (
    <div>
      <div className={styles.social_btns}>
        <Link className={`${styles.btn} ${styles.github}`} href="#">
          <AiFillGithub className={styles.fa} />
        </Link>
        <Link className={`${styles.btn} ${styles.instagram}`} href="#">
          <AiFillInstagram className={styles.fa} />
        </Link>
        <Link className={`${styles.btn} ${styles.google}`} href="#">
          <AiOutlineGoogle className={styles.fa} />
        </Link>
        <Link className={`${styles.btn} ${styles.linkedin}`} href="#">
          <FaLinkedinIn className={styles.fa} />
        </Link>
      </div>
    </div>
  )
}
