import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <div className="nav_bar">
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
