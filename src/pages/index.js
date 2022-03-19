import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"
import Heading from "../components/Heading"
import Typewriter from "typewriter-effect"
import SVG from "../components/SVG"
import SVGg from "../components/SVGg"
import ParallaxProjects from "../components/ParallaxProjects"

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.homeheader}>
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
                  .typeString(" Web Developer and Machine Learning Enthusiat")
                  .start()
              }}
            />
          </div>
          <div className={styles.headwelcome}>
            <h3 data-aos="zoom-in">Nice to see you here.</h3>
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

          <div className={styles.image6}>
            <SVG />
          </div>
          <div className={styles.image7}>
            <SVGg />
          </div>
        </section>
      </div>
      <section className={styles.home_project_section}>
        {/* <Heading text="my projects" /> */}

        <ParallaxProjects />
      </section>
    </Layout>
  )
}
