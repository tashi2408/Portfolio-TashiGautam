import React from "react"
import Layout from "../../components/Layout"
import ProjectGallery from "../../components/ProjectGallery"
import Heading from "../../components/Heading"
import ProjectSlide from "../../components/ProjectSlide"
import Footer from "../../components/Footer"

export default function Projects() {
  return (
    <Layout>
      <Heading text="my projects" />
      <div style={{ overflow: "hidden" }}>
        <ProjectSlide />
        <ProjectGallery />
      </div>
    </Layout>
  )
}
