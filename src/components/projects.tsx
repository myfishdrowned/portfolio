import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='h-full w-full font-display mx-20 py-20'>
            <h2 className='text-5xl'>Projects</h2>
            <ProjectCard 
                name= {'Bloom'}
                img = { '' }
                liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                github = { 'https://github.com/jtcaovan/shopping-cart' }
            />
            <ProjectCard 
                name = {'Weather App'}
                img = { '' }
                github = {'https://github.com/jtcaovan/WeatherApp'}
                liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
            /> 
        </div>
    )
}

export default Projects