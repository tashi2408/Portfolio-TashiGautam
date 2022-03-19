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
import Resume from "../../static/TashiGautam.pdf"

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutMe}>
        <Heading text="about me" />
        <section className={styles.intro} data-aos="fade-left">
          <div className={styles.intro__left}>
            <img src="/Tashi.jpg" />
          </div>
          <div className={styles.intro__right}>
            <h1>Tashi Gautam</h1>
            <p>
              Hello! I'm Tashi Gautam. I'm a third-year undergrad at Ajay Kumar
              Garg Engineering College pursuing engineering in Computer Science
              and Information Technology. I am a Web Developer and Machine
              Learning Enthusiast. I've done work for organizations and startups
              as an intern and collaborated with talented people to create
              products for consumer use. I like to code things from scratch and
              enjoy bringing ideas to life in the browser. Fueled by high energy
              and boundless enthusiasm, I'm easily inspired and more willing to
              follow my fascinations where they take me. My curiosity drove me
              to explore other domains like Competitive coding, Ethical hacking,
              Data analytics, and UI/UX designing. I'm confident and perpetually
              working on improving my skills. I genuinely care about people and
              love helping fellow students. I believe as a web developer, I'd be
              a great asset to a Web Development team.
            </p>

            <a className={styles.btn} href={"TashiGautam.pdf"} download>
              <div className={styles.button}>
                {/* <input id="button" type="checkbox" /> */}
                {/* <label for="button"> */}
                <div className={styles.button_inner}>
                  <AiOutlineLogin className={styles.l} />
                  <span className={styles.t}>My Resume</span>
                  <span>
                    <IoCheckmark className={styles.tick} />
                  </span>
                </div>
                {/* </label> */}
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
