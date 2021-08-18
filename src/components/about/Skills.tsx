import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, graphql, npm, heroku, netlify} from '../../images/icons'

function Skills() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [inView])

    const header = {
        visible: {
            y: 0, opacity: 1,
            transition: {
                staggerChildren: .2,
                delayChildren: .2, 
                duration: 1,
            }
        },
        hidden: {
            y: '5vw', opacity: 0
        }
    }

    const icons = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 0
        }
    }

    return(
        <div ref={ref} className='m-auto flex w-3/4 py-24 my-4'>
            <div className='w-1/4 flex flex-col justify-between'>
                <motion.h1 initial='hidden' animate={animation} variants={header} className='font-display text-4xl'>Skills</motion.h1>
            </div>

            <div className='flex flex-col w-3/4 space-y-24'>
                <div className='font-body text-lg tracking-wide leading-loose'>
                    <motion.p initial='hidden' animate={animation} variants={header}>Experience in building web applications using JavaScript and React. Currently learning Node.js and Express.js to take my applications to the server side.</motion.p>
                </div>
                <div className='flex space-x-8 divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                    <motion.div            
                        initial='hidden'
                        animate={animation}
                        variants={header} 
                        className='w-1/2'>
                        <motion.h2 variants={header} className='font-display text-lg'>Languages and Frameworks</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                            <motion.li variants={icons} className='icon'>{html} HTML5</motion.li>
                            <motion.li variants={icons} className='icon'>{css} CSS3</motion.li>
                            <motion.li variants={icons} className='icon'>{javascript}JavaScript</motion.li>
                            <motion.li variants={icons} className='icon'>{react}React</motion.li>
                            <motion.li variants={icons} className='icon'>{gatsby}Gatsby</motion.li>
                            <motion.li variants={icons} className='icon'>{tailwind}Tailwind</motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div 
                            initial='hidden'
                            animate={animation}
                            variants={header} 
                            className='w-1/2'>
                        <motion.h2 variants={header} className='font-display text-lg'>Development Tools</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 font-body justify-items-center text-sm pt-14'>
                            <motion.li variants={icons} className='icon'>{redux}Redux</motion.li>
                            <motion.li variants={icons} className='icon'>{webpack}Webpack</motion.li>
                            <motion.li variants={icons} className='icon'>{graphql}GraphQL</motion.li>
                            <motion.li variants={icons} className='icon'>{heroku}Heroku</motion.li>
                            <motion.li variants={icons} className='icon'>{netlify}Netlify</motion.li>
                            <motion.li variants={icons} className='icon'>{npm}npm</motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills