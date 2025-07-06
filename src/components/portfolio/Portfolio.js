import React, {useEffect} from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StaticImage } from 'gatsby-plugin-image'

const Portfolio = () => {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [inView, animation])

    const list = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
        hidden: {
             opacity: 0
        }
    }

    return (
        <div ref={ref} data-scroll-section id='container' className='text-graphite m-auto w-screen pt-14 h-full'>
            <motion.div className='flex flex-col max-w-6xl space-y-12 md:space-y-0 text-center md:text-left md:flex-row md:space-x-10 justify-between w-3/4 h-10/12 m-auto' 
                id='portfolio'
                initial='hidden' 
                animate={animation} 
                variants={list}>
                <motion.div className='flex flex-row space-x-2 m-auto md:m-0 md:flex-col md:space-y-2 w-full md:w-1/4 h-full text-4xl font-display'
                data-scroll data-scroll-sticky data-scroll-target='#container' variants={list}>
                    <p>Featured</p>
                    <p className='md:ml-8'>Projects</p>
                </motion.div>

                <div className='flex flex-col space-y-20 md:space-y-0 w-full md:w-3/4 h-full text-center'>
                    <motion.div data-scroll data-scroll-delay='.1' data-scroll-speed='5' variants={list}>
                            <StaticImage className='mb-4' src={'../../images/screenShots/preview.jpg'} alt='Personal portfolio project'/>
                            <ProjectCard 
                                name = {'devfinder'}
                                tags = { ['TypeScript', 'React', 'SASS', 'GitHubAPI']}
                                github = {'https://github.com/jtcaovan/github-user-search'}
                                liveDemo = {'https://github.com/jtcaovan/github-user-search'}
                                alt = {'Image of devfinder'}
                                description = { 'Coming Soon...' }
                            /> 
                    </motion.div>
                    <div data-scroll data-scroll-delay='.1' data-scroll-speed='5'>
                        <StaticImage className='mb-4' src={'../../images/screenShots/bloom.png'} alt='Personal portfolio project'/>
                        <ProjectCard
                            name= {'Bloom'}
                            tags = { ['JavaScript', 'React', 'Redux', 'TailwindCSS'] }
                            liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                            github = { 'https://github.com/jtcaovan/shopping-cart' }
                            alt = {'Screenshot of Bloom, an indoor plant e-commerce web application'}
                            description = {'An indoor plant e-commerce frontend web application with a fully functioning shopping cart, product detail pages, and clean landing page. Users can add, modify, and remove items from their cart as well as filter products by category. Utilized React Router for seamless navigation throughout the site.'}
                        />
                    </div>
                    <div data-scroll data-scroll-delay='.1' data-scroll-speed='5'>
                        <StaticImage className='mb-4' src={'../../images/screenShots/weather.png'} alt='Personal portfolio project'/>
                        <ProjectCard 
                            name = {'Breezy'}
                            tags = { ['JavaScript', 'React', 'TailwindCSS', 'OpenWeatherAPI']}
                            github = {'https://github.com/jtcaovan/WeatherApp'}
                            liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
                            alt = {'Screenshot of Breezy, a weather application.'}
                            description = { 'A widget-style weather application that displays the current weather, forecast, and details of over 200,000 cities in the world. Weather data is fetched using OpenWeather API. So simple and easy to use, it\'s Breezy.'}
                        /> 
                    </div>
                    <div data-scroll data-scroll-delay='.1' data-scroll-speed='5'>
                        <StaticImage className='mb-4' src={'../../images/screenShots/odin.png'} alt='Personal portfolio project'/>
                        <ProjectCard 
                            name = {'The Odin Project'}
                            tags = { ['Open Source Contributor']}
                            github = {'https://github.com/TheOdinProject/curriculum'}
                            liveDemo = {'https://www.theodinproject.com/'}
                            alt = {'Image of The Odin Project, a free, open-source coding curriculum'}
                            description = { 'The Odin Project is a free, open-source, full stack coding curriculum. I contributed to the curriculum, updating the content for future students.' }
                        /> 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Portfolio