import React, {useEffect, useState} from 'react'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, vscode, graphql, git, npm, heroku, netlify} from '../images/icons'
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2
                }
            })
        }
        if(!inView) {
            animation.start({
                x: '-100vw',
                transition: {
                    duration: 2
            } })
        }
    }, [inView])

    return (
        <div ref={ref} className='h-full w-full pt-12 pb-28 overflow-hidden'>
            <motion.div className='flex mx-20 my-12 justify-between' animate={animation}>
                <div className='flex flex-col space-y-8 w-1/2 justify-between'>
                    <h1 className='font-display text-4xl font-thin'>About Me</h1>
                    <p className='font-body tracking-wide leading-loose'>
                        I'm a self-taught Front-end developer based in Phoenix, Arizona.
                        Like the process of implementing ideas and bringing them to life on screen. 
                        </p>

                    <h1 className='font-display text-4xl font-thin pt-12'>Skills and Languages</h1>
                    <div className='w-max rounded-xl'>
                        <h2 className='font-display text-xl font-thin'>Technologies</h2>
                        <ul className='flex space-x-8 font-body 
                         px-8 py-4 shadow-2xl rounded-xl'>
                            <li className='icon'>{html} HTML5</li>
                            <li className='icon'>{css} CSS3</li>
                            <li className='icon'>{javascript}Javascript</li>
                            <li className='icon'>{react}React</li>
                            <li className='icon'>{redux}Redux</li>
                            <li className='icon'>{gatsby}Gatsby</li>
                            <li className='icon'>{tailwind}Tailwind</li>
                        </ul>
                    </div>
                    <div className='w-max'>
                        <h2 className='font-display text-xl font-thin'>Tools</h2>
                        <ul className='flex space-x-8 font-body 
                         px-8 py-4 shadow-2xl rounded-xl'>
                            <li className='icon'>{webpack}Webpack</li>
                            <li className='icon'>{graphql}GraphQL</li>
                            <li className='icon'>{heroku}Heroku</li>
                            <li className='icon'>{netlify}Netlify</li>
                            <li className='icon'>{git}Git</li>
                            <li className='icon'>{npm}npm</li>
                            <li className='icon'>{vscode}VS Code</li>
                        </ul>
                    </div>
                </div>

                {/* <StaticImage className='w-1/3' src='../images/profile.svg' alt='profile'/> */}

            </motion.div>
        </div>
    )
}

export default About