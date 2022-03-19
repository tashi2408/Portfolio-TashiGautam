import React from "react"
import "../styles/parallaxproject.scss"
import Projects from "../pages/projects.json"
import { Link } from "gatsby"
import img from "../../static/1.jpg"

export default function ParallaxProjects() {
  return (
    <div className="parallaxprojects">
      <article>
        {Projects.map((item, i) => (
          <>
            <figure>
              <img src={`../../${item.img}`} alt />
            </figure>
            <section>
              <div>
                <h1>{item.title}</h1>
                <Link>View More</Link>
                <p>{item.info}</p>
              </div>
            </section>
          </>
        ))}
      </article>
    </div>
  )
}
