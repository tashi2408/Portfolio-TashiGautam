import { Link } from "@reach/router"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"
import Projects from "./projects.json"
import Typewriter from "typewriter-effect"
import SVG from "../components/SVG"
import SVGg from "../components/SVGg"
import ParallaxProjects from "../components/ParallaxProjects"
import Heading from "../components/Heading"

export default function Home() {
  return (
    <Layout className={styles.hide}>
      <div className={styles.hide}>
        <div className={styles.home}>
          <section className={`${styles.basecontainer} ${styles.group1}`}>
            <div className={`${styles.container} ${styles.container_fore}`}>
              <div className={styles.headtitle}>
                <h1>Hello!</h1>
                <h3>Nice to see you here.</h3>
              </div>
              <div className={styles.image}>
                <SVG />
              </div>
              <div className={styles.image1}>
                <SVGg />
              </div>
              <div className={styles.image2}>
                <SVG />
              </div>
              <div className={styles.image3}>
                <SVGg />
              </div>
              <div className={styles.image4}>
                <SVG />
              </div>
              <div className={styles.image5}>
                <SVGg />
              </div>
              <div className={styles.image6}>
                <SVG />
              </div>
              <div className={styles.image7}>
                <SVGg />
              </div>
              <div className={styles.image8}>
                <SVGg />
              </div>
            </div>
            <div
              className={`${styles.container} ${styles.container_base}`}
            ></div>
            <div
              className={`${styles.container} ${styles.container_back}`}
            ></div>
          </section>
          <section className={`${styles.basecontainer} ${styles.group2}`}>
            <div className={`${styles.container} ${styles.container_fore}`}>
              <div className={styles.headtitle}>
                <h1>I'm Tashi Gautam</h1>
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .typeString(" Web Developer")
                      .pause(2000)
                      .deleteAll()
                      .typeString(" Machine Learning Enthusiat")
                      .pause(2000)
                      .deleteAll()
                      .typeString(
                        " Web Developer and Machine Learning Enthusiat"
                      )
                      .start()
                  }}
                />
              </div>
              <div className={styles.image1}>
                <SVG />
              </div>
              <div className={styles.image2}>
                <SVGg />
              </div>
              <div className={styles.image3}>
                <SVG />
              </div>
              <div className={styles.image4}>
                <SVGg />
              </div>
            </div>
          </section>
          <section>
            <div className={styles.project_head}>
              <Heading text="my projects" />
            </div>

            <ParallaxProjects />
          </section>
          <footer>
            <p>Cpoyright 2021 Tashi Gautam</p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

/*  */
