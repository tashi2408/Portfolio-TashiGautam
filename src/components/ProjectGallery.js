import { Link } from "gatsby"
import React, { useState } from "react"
import * as styles from "../styles/projects.module.scss"
import Projects from "../pages/projects.json"
import { filter } from "lodash"

export default function ProjectGallery() {
  const [projects, setProjects] = useState(Projects)
  let headers = []

  Projects.map((item, i) => {
    item.techStack.map((e, index) => {
      headers.push(e)
    })
  })
  let finalheaders = [...new Set(headers)]

  const filterItem = tech => {
    const updatedProjects = Projects.filter(el => {
      //   return el.techStack.find(tech) ? true : false
      return el.techStack.find(e => e === tech)
      //   console.log(el.techStack, tech, techs)
    })

    setProjects(updatedProjects)
  }
  return (
    <div className={styles.gallery}>
      <div className={styles.menu}>
        <button
          className={styles.menu_btn}
          onClick={() => setProjects(Projects)}
        >
          All
        </button>
        {finalheaders.map((item, i) => (
          <button
            className={styles.menu_btn}
            key={i}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.container}>
        {projects.map((e, i) => {
          return (
            <div className={styles.card} data-aos="fade-right">
              <div className={styles.box}>
                <div className={styles.content} key={i}>
                  <h2>{e.number}</h2>
                  <h3>{e.title}</h3>
                  <p>{e.info}</p>
                  <Link to={"/projects/meetme"}>Read More</Link>
                  <div>
                    {e.techStack.map((tech, index) => (
                      <div key={index}>{tech}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
