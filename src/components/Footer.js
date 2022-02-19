import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li> | </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li> | </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <p> &copy; 2021 Tashi Gautam</p>
    </footer>
  )
}
