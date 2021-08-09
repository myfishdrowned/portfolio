import React from 'react'
import Bio from './Bio'
import Skills from './Skills'

const About = () => {

    return (
        <div data-scroll-section className='relative min-h-screen w-full my-24 overflow-hidden'>
            <Bio 
            data-scroll 
            data-scroll-speed='2'           
            data-scroll-position="top"
            data-scroll-direction='horizontal'/>
            <Skills />
        </div>
    )
}

export default About