import React, {useEffect, useRef} from "react"
import ReactDOM from "react-dom";
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Projects from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import LocomotiveScroll from 'locomotive-scroll';

const IndexPage = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    let locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
 
  locomotiveScroll.update();
  window.scroll = locomotiveScroll;
  return () => {
    if (locomotiveScroll) locomotiveScroll.destroy();
  };
});

  return (
      <div data-scroll-container ref={scrollRef} className='h-full bg-light-green'>
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
