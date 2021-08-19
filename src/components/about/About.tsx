import React from 'react'
import Bio from './Bio'
import Skills from './Skills'

const About = () => {

    return (
        <div data-scroll-section id='about' className='flex flex-col divide-y divide-graphite min-h-screen w-full my-18'>
            <Bio />
            <Skills />
            <div className='w-3/4 m-auto'></div>
        </div>
    )
}

export default About