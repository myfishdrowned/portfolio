import React, {useEffect} from "react"
import { Helmet } from "react-helmet"
import Hero from '../components/hero/Hero';
import About from '../components/about/About'
import Projects from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import LocomotiveScroll from 'locomotive-scroll';

const IndexPage = () => {

  useEffect(() => {
    let locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.smooth-scroll'),
      smooth: true,
    });
    locomotiveScroll.update();
    window.scroll = locomotiveScroll;
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
},[]);

  return (
      <div data-scroll-container className='smooth-scroll bg-light-green overflow-hidden'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Justin Caovan | Front End Developer</title>
          <link rel="canonical" href="https://www.justincaovan.com" />
        </Helmet>
          <Hero />
          <About/>
          <Projects />
          <Contact />
      </div>
  )
}

export default IndexPage
