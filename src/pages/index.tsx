import React, {useEffect, useRef} from "react"
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
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
        <title>Justin Caovan | Front End Developer</title>
          <Nav />
          <Hero />
          <About/>
          <Projects />
          <Contact />
      </div>
  )
}

export default IndexPage
