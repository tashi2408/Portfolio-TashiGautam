import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/pages/home">Home</Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/pages/about">About</Link>
          </li>
          <li> | </li>

          <li>
            <Link to="/pages/projects">Projects</Link>
          </li>
          <li> | </li>

          <li>
            <Link to="/pages/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <p> &copy; 2021 Tashi Gautam</p>
    </footer>
  )
}
