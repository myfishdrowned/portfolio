import React, {useEffect} from 'react'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, vscode, graphql, git, npm, heroku, netlify} from '.../images/icons.tsx'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const About = () => {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
        if(!inView) {
            animation.start('hidden')
        }
    }, [inView])

    const list = {
        visible: {
            x: 0, opacity: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: .3,
                type: 'spring',
                duration: 2,
            }
        },
        hidden: {
            x: '-100vw', opacity: 0
        }
    }


    return (
        <div ref={ref} className='h-full w-full bg-bg-tan pt-12 pb-28 overflow-hidden'>
            <div className='flex mx-20 my-12 justify-between'>
                <motion.div
                ref={ref}
                initial='hidden' animate={animation} variants={list}
                className='flex flex-col space-y-8 w-1/2 justify-between'>
                    <motion.h1 variants={list} className='font-display text-4xl font-thin'>About Me</motion.h1>
                    <motion.p variants={list} className='font-body tracking-wide leading-loose'>
                        I'm a self-taught Front-end developer based in Phoenix, Arizona.
                        Like the process of implementing ideas and bringing them to life on screen. 
                    </motion.p>
                </motion.div>

                <motion.div
                ref={ref} 
                initial='hidden' animate={animation} variants={list}
                className='flex flex-col space-y-8 w-1/2 justify-between'>
                    <motion.h1 variants={list} className='font-display text-4xl font-thin pt-12'>Skills</motion.h1>
                    <motion.h2 variants={list} className='font-display text-xl font-thin'>Languages and Frameworks</motion.h2>
                    <motion.ul variants={list} className='flex space-x-8 font-body 
                        px-8 py-4 shadow-2xl rounded-xl w-max'>
                        <li className='icon'>{html} HTML5</li>
                        <li className='icon'>{css} CSS3</li>
                        <li className='icon'>{javascript}Javascript</li>
                        <li className='icon'>{react}React</li>
                        <li className='icon'>{gatsby}Gatsby</li>
                        <li className='icon'>{tailwind}Tailwind</li>
                    </motion.ul>
                    <motion.h2 variants={list} className='font-display text-xl font-thin'>Development Tools</motion.h2>
                    <motion.ul variants={list} className='flex space-x-8 font-body 
                        px-8 py-4 shadow-2xl rounded-xl w-max'>
                        <li className='icon'>{redux}Redux</li>
                        <li className='icon'>{webpack}Webpack</li>
                        <li className='icon'>{graphql}GraphQL</li>
                        <li className='icon'>{heroku}Heroku</li>
                        <li className='icon'>{netlify}Netlify</li>
                        <li className='icon'>{npm}npm</li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
    )
}

export default About