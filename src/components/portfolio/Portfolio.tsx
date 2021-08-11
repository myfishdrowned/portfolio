import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'
import weather from '../../images/weatherApp.png'

const Portfolio = () => {
    return (
        <div data-scroll-section id="fixed-target" className='w-2/3 py-14 h-screen m-auto flex'>
            <h2
            data-scroll
   
            className='w-1/2 h-full font-display text-2xl'>Featured Projects </h2>

            <div className='flex flex-col w-1/2 h-full text-center'>
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
        </div>
    )
}

export default Portfolio