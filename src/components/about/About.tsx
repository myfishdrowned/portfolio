import React, {useEffect} from 'react'
import Bio from './Bio'
import Skills from './Skills'
import { useInView } from 'react-intersection-observer'


const About = () => {

    return (
        <div className='relative min-h-screen w-full pb-28 overflow-hidden'>
            <Bio />
            <Skills />
        </div>
    )
}

export default About