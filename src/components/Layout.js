import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"

import SocialIcons from "./SocialIcons"

import AOS from "aos"
import "aos/dist/aos.css"

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className="layout">
      <div className="layout-content">
        <Navbar />
        <SocialIcons />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
