import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'
import weather from '../../images/weatherApp.png'

const Projects = () => {
    return (
        <div className='bg-light-green h-full w-screen py-20'>
            <h2 className='font-display text-5xl'>Projects</h2>
            <ProjectCard 
                name= {'Bloom'}
                img = { '' }
                tags = { ['React', 'Redux', 'TailwindCSS'] }
                liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                github = { 'https://github.com/jtcaovan/shopping-cart' }
                description = {''}
            />
            <ProjectCard 
                name = {'Weather App'}
                img = { weather }
                tags = { ['React', 'TailwindCSS', 'Rest API' ]}
                github = {'https://github.com/jtcaovan/WeatherApp'}
                liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
                description = { ' A simple weather widget-style application that displays the current weather and hourly/daily forecast.'}
            /> 
        </div>
    )
}

export default Projects