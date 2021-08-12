import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'
import weather from '../../images/screenShots/weatherApp.png'
import bloom from '../../images/screenShots/bloom.png'

const Portfolio = () => {
    return (
        <div data-scroll-section  className='w-2/3 py-14 h-screen m-auto flex'>
            <h2
            className='sticky top-0 w-1/3 h-full font-display text-2xl'>Featured Projects </h2>
            <div className='flex flex-col w-2/3 h-full text-center'>
                <ProjectCard 
                    name= {'Bloom'}
                    img = { bloom }
                    tags = { ['React', 'Redux', 'TailwindCSS'] }
                    liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                    github = { 'https://github.com/jtcaovan/shopping-cart' }
                    description = {'An single-page ecommerce website'}
                />
                <ProjectCard 
                    name = {'Weather App'}
                    img = { weather }
                    tags = { ['React', 'TailwindCSS', 'Rest API' ]}
                    github = {'https://github.com/jtcaovan/WeatherApp'}
                    liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
                    description = { 'A weather widget-style application that displays the current weather and hourly/daily forecast.'}
                /> 
            </div>
        </div>
    )
}

export default Portfolio