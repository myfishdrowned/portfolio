import * as React from "react"
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Projects from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'

const IndexPage = () => {
  return (
    <div>
      <title>Justin Caovan | Front End Developer</title>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
