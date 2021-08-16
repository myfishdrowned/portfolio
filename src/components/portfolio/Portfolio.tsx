import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'
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
    }, [inView])

    const list = {
        visible: {
            y: 0, opacity: 1,
            transition: {
                duration: 1,
            }
        },
        hidden: {
            y: '5vw', opacity: 0
        }
    }

    return (
        <div ref={ref} data-scroll-section className='w-3/4 py-14 h-full m-auto flex'>
            <motion.h2
                initial='hidden'
                animate={animation}
                variants={list}
                className='w-1/3 h-full font-display text-4xl'>Featured Projects 
            </motion.h2>

            <div className='flex flex-col w-2/3 h-full text-center'>
                <motion.div
                    ref={ref}
                  initial='hidden'
                  animate={animation}
                  variants={list}
                data-scroll data-scroll-direction='vertical' data-scroll-speed='4'>
                    <StaticImage className='' src={'../../images/screenShots/bloom.png'} alt='Personal portfolio project'/>
                    <ProjectCard 
                        name= {'Bloom'}
                        tags = { ['React', 'Redux', 'TailwindCSS'] }
                        liveDemo = { 'https://bloom-shopping-cart.herokuapp.com/' }
                        github = { 'https://github.com/jtcaovan/shopping-cart' }
                        description = {'A simple, single-page indoor plant eCommerce web application with a focus on the front-end user interface. Users can add and remove items from their cart, filter products by category, and '}
                    />
                </motion.div>
                <motion.div
                ref={ref}
                  initial='hidden'
                  animate={animation}
                  variants={list}
                data-scroll data-scroll-direction='vertical' data-scroll-speed='4'>
                    <StaticImage className='' src={'../../images/screenShots/weather.png'} alt='Personal portfolio project'/>
                    <ProjectCard 
                        name = {'Weather App'}
                        tags = { ['React', 'TailwindCSS', 'Rest API' ]}
                        github = {'https://github.com/jtcaovan/WeatherApp'}
                        liveDemo = {'https://jtcaovan.github.io/WeatherApp/'}
                        description = { 'A weather widget-style application that displays the current weather and hourly/daily forecast.'}
                    /> 
                </motion.div>
            </div>
        </div>
    )
}

export default Portfolio