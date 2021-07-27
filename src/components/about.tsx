import React, {useEffect} from 'react'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, vscode, graphql, git, npm, heroku, netlify} from '../images/icons'
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

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
                duration: 4
            } })
        }
    }, [inView])

    return (
        <div ref={ref} className='bg-gradient-to-t from-gray-700 via-gray-600 to-gray-600 text-white h-full w-full py-28 overflow-hidden'>
            <motion.div className='flex flex-col items-center justify-center m-auto space-y-20' animate={animation}>

                <div className='w-7/12 text-center flex flex-col space-y-4'>
                <h1 className='font-display text-4xl font-thin'>About Me</h1>
                    <p className='font-body tracking-wide leading-loose'>I'm a self-taught Front-end developer based in Phoenix, Arizona 
                    I'm a self-taught Front-end developer based in Phoenix, Arizona
                    I'm a self-taught Front-end developer based in Phoenix, Arizona
                    I'm a self-taught Front-end developer based in Phoenix, Arizona
                    I'm a self-taught Front-end developer based in Phoenix, Arizona
                    I'm a self-taught Front-end developer based in Phoenix, Arizona</p>
                </div>

                <div className='flex w-2/5 justify-between'>
                    <div className='text-center w-2/5'>
                        <h2 className='font-display text-xl font-thin'>Technologies</h2>
                        <ul className='grid grid-cols-2 gap-2 font-body bg-white 
                        text-black border rounded-lg border-black p-4'>
                            <motion.li whileHover={{ scale: 1.3 }}>{html} HTML5</motion.li>
                            <li>{css} CSS3</li>
                            <li>{javascript}Javascript</li>
                            <li>{react}React</li>
                            <li>{redux}Redux</li>
                            <li>{gatsby}Gatsby</li>
                            <li>{tailwind}Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className='text-center w-2/5'>
                        <h2 className='font-display text-xl font-thin'>Tools</h2>
                        <ul className='grid grid-cols-2 gap-2 font-body bg-white 
                        text-black border rounded-lg border-black p-4'>
                            <li>{git}Git</li>
                            <li>{vscode}VS Code</li>
                            <li>{heroku}Heroku</li>
                            <li>{netlify}Netlify</li>
                            <li>{webpack}Webpack</li>
                            <li>{graphql}GraphQL</li>
                            <li>{npm}npm</li>
                        </ul>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default About