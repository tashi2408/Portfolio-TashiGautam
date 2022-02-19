import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/about.module.scss"

import { AiOutlineLogin } from "react-icons/ai"
import { IoCheckmark } from "react-icons/io5"
import Heading from "../components/Heading"

import SkillRound from "../components/SkillRound"
import Skillbar from "../components/Skillbar"

import SVG from "../components/SVG"
import SVGg from "../components/SVGg"

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutMe}>
        <Heading text="about me" />
        <section className={styles.intro} data-aos="fade-left">
          <div className={styles.intro__left}>
            <img src="/2.jpg" />
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
            <a
              className={styles.btn}
              href="/TashiGautam.pdf"
              download="TashiGautam.pdf"
            >
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
            </a>
          </div>
          <div className={styles.image1}>
            <SVG />
          </div>
        </section>

        <section className={styles.education}>
          <Heading text="Education" />
          <div className={styles.image1}>
            <SVG />
          </div>
          <div className={styles.image2}>
            <SVGg />
          </div>
          <div className={styles.image3}>
            <SVGg />
          </div>

          <div className={styles.education_block} data-aos="fade-right">
            <div className={styles.education_stages}>
              <h1>Ajay Kumar Garg Engineering College</h1>
              <h2>2019 - Present </h2>
              <h4>
                B.Tech Computer Science and Information Technology |{" "}
                <span>CGPA: 8.99</span>
              </h4>
              <ul>
                <h3>Positions of responsibilities</h3>
                <li>
                  google developers student club <span>lead </span> 2021-2022
                </li>
                <li>
                  Traning and placement cell <span>coordinator</span>
                </li>
                <li>
                  Horizon Techno-Managerial Society <span>coordinator</span>
                </li>
              </ul>
            </div>
            <div className={styles.education_stages}>
              <h1>Mata Jai Kaur Public School</h1>
              <h2>2018 - 2019 </h2>
              <h4>
                CBSE | Intermediate | <span>Percentage: 95%</span>
              </h4>
            </div>
            <div className={styles.education_stages}>
              <h1>Mata Jai Kaur public school</h1>
              <h2>2016 - 2017 </h2>
              <h4>
                CBSE | HighSchool | <span>CGPA: 9.8</span>
              </h4>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <Heading text="skills" />
          <div className={styles.skills_section}>
            <div className={styles.skills_left} data-aos="fade-right">
              <Skillbar value={95} label="HTML" />
              <Skillbar value={75} label="JavaScript" />
              <Skillbar value={90} label="SCSS" />
              <Skillbar value={80} label="ReactJS" />
              <Skillbar value={70} label="NodeJS" />
            </div>
            <div className={styles.skills_right} data-aos="fade-left">
              <SkillRound value={95} label="Public Speaking" />
              <SkillRound value={87} label="Leadership" />
              <SkillRound value={85} label="Management" />
              <SkillRound value={88} label="Creative Thinking" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
