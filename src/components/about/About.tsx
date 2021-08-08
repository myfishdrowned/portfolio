import React from 'react'
import Bio from './Bio'
import Skills from './Skills'

const About = () => {

    return (
        <div className='bg-tan z-10 relative min-h-screen w-full pb-28 overflow-hidden'>
            <Bio />
            <Skills />
        </div>
    )
}

export default About