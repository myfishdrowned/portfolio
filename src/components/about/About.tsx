import React from 'react'
import Bio from './Bio'
import Skills from './Skills'

const About = () => {

    return (
        <div data-scroll-section className='relative flex flex-col divide-y divide-black
        min-h-screen w-full my-18'>
            <Bio />
            <Skills />
            <div className='w-2/3 m-auto'></div>
        </div>
    )
}

export default About