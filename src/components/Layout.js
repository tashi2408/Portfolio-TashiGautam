import React, { useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"
import { lightTheme, darkTheme } from "./Theme"

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="layout" style={theme === "light" ? lightTheme : darkTheme}>
      <div className="layout-content">
        <Navbar toogleTheme={toggleTheme} />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
