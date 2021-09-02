import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/about.module.scss"

import { AiOutlineLogin } from "react-icons/ai"
import { IoCheckmark } from "react-icons/io5"
import Me from "../../static/2.jpg"

export default function About() {
  return (
    <Layout>
      <div>
        <section className={styles.intro}>
          <div className={styles.intro__left}>
            <img src={Me} />
          </div>
          <div className={styles.intro__right}>
            <h1>Tashi Gautam</h1>
            <p>
              My name is John Smith. I am a web designer and developer.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut laboagna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus
              vel facilisis.
            </p>
            <div className={styles.btn}>
              <div className={styles.button}>
                <input id="button" type="checkbox" />
                <label for="button">
                  <div className={styles.button_inner}>
                    <AiOutlineLogin className={styles.l} />
                    <span className={styles.t}>My Resume</span>
                    <span>
                      <IoCheckmark className={styles.tick} />
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <div className={styles.skills_left}></div>
          <div className={styles.skills_right}></div>
        </section>
      </div>
    </Layout>
  )
}
