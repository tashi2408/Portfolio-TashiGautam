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
import Footer from "../components/Footer"
import { graphql } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden !important",
        }}
      >
        <div className={styles.home}>
          <section className={`${styles.basecontainer} ${styles.group1}`}>
            <div className={`${styles.container} ${styles.container_fore}`}>
              <div className={styles.headtitle}>
                <h1 data-aos="zoom-in">Hello!</h1>
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
        </div>
      </div>
      <section className={styles.home_project_section}>
        <Heading text="my projects" />

        <ParallaxProjects />
      </section>
    </Layout>
  )
}
