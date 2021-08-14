import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'
import weather from '../../images/screenShots/weather.png'
import bloom from '../../images/screenShots/bloom.png'
import { StaticImage } from 'gatsby-plugin-image'

const Portfolio = () => {
    return (
        <div data-scroll-section className='w-2/3 py-14 h-full m-auto flex'>
            <h2
            className='w-1/3 h-full font-display text-2xl'>Featured Projects </h2>

            <div className='flex flex-col w-2/3 h-full text-center'>
                <div data-scroll data-scroll-direction='vertical' data-scroll-speed='4'>
                    <StaticImage className='' src={'../../images/screenShots/bloom.png'} alt='Personal portfolio project'/>
                    <ProjectCard 
                        name= {'Bloom'}
                        tags = { ['React', 'Redux', 'TailwindCSS'] }
                        liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                        github = { 'https://github.com/jtcaovan/shopping-cart' }
                        description = {'A simple, single-page indoor plant eCommerce web application with a focus on the front-end user interface. Users can add, modify, and remove items from their cart as well as filter products by category.'}
                    />
                </div>
                <div data-scroll data-scroll-direction='vertical' data-scroll-speed='4'>
                    <StaticImage className='' src={'../../images/screenShots/weather.png'} alt='Personal portfolio project'/>
                    <ProjectCard 
                        name = {'Weather App'}
                        tags = { ['React', 'TailwindCSS', 'Rest API' ]}
                        github = {'https://github.com/jtcaovan/WeatherApp'}
                        liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
                        description = { 'A weather widget-style application that displays the current weather and hourly/daily forecast.'}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio