import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import AnimatedCursor from "react-animated-cursor"

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
    <div>
      {/* <AnimatedCursor
        innerSize={14}
        outerSize={12}
        color="197, 68, 141"
        outerAlpha={0.3}
        innerScale={0.8}
        outerScale={7}
      /> */}
      <Navbar />
      <SocialIcons />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
