import React, {useEffect, useRef} from "react"
import { Helmet } from "react-helmet"
import Hero from '../components/hero/Hero';
import About from '../components/about/About'
import Skills from '../components/about/Skills'
import Projects from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import LocomotiveScroll from 'locomotive-scroll';

const IndexPage = () => {
  const scrollRef = useRef()

  useEffect(() => {
    let locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
    });
    locomotiveScroll.update();
    window.scroll = locomotiveScroll;
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
});

  return (
      <div data-scroll-container ref={scrollRef} className='smooth-scroll bg-light-green overflow-hidden'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Saif-Ur Rahman | IAM Engineer</title>
          <meta name="description" content="Personal portfolio website for Saif-Ur Rahman with his bio, projects and contact information" />
          <link rel="canonical" href="https://saif-ur-rahman.com" />
          <html lang="en" />
        </Helmet>
          <Hero />
          <About/>
          <Skills />
          <Projects />
          <Contact />
      </div>
  )
}

export default IndexPage
