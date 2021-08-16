import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, graphql, npm, heroku, netlify} from '../../images/icons'

function Skills() {
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
                when: 'beforeChildren',
                staggerChildren: .2,
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
        <div ref={ref} className='m-auto flex w-2/3 py-24 my-4'>
            <motion.div
                initial='hidden'
                animate={animation} 
                variants={list}
                className='w-1/4 flex flex-col justify-between'>
                <motion.h1 variants={list} className='font-display text-4xl'>Skills</motion.h1>
            </motion.div>

            <motion.div 
            initial='hidden'
            animate={animation}
            variants={list}
            className='flex w-3/4 space-x-8 divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                <motion.div variants={list} className='w-1/2'>
                    <motion.h2 variants={list} className='font-display text-lg'>Languages and Frameworks</motion.h2>
                    <motion.ul variants={list}
                        className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                        <motion.li variants={icons} className='icon'>{html} HTML5</motion.li>
                        <motion.li variants={icons} className='icon'>{css} CSS3</motion.li>
                        <motion.li variants={icons} className='icon'>{javascript}JavaScript</motion.li>
                        <motion.li variants={icons} className='icon'>{react}React</motion.li>
                        <motion.li variants={icons} className='icon'>{gatsby}Gatsby</motion.li>
                        <motion.li variants={icons} className='icon'>{tailwind}Tailwind</motion.li>
                    </motion.ul>
                </motion.div>
                <motion.div variants={list} className='w-1/2'>
                    <motion.h2 variants={list} className='font-display text-lg'>Development Tools</motion.h2>
                    <motion.ul variants={list} className='grid grid-rows-2 grid-cols-3 gap-y-16 font-body justify-items-center text-sm pt-14'>
                        <motion.li variants={icons} className='icon'>{redux}Redux</motion.li>
                        <motion.li variants={icons} className='icon'>{webpack}Webpack</motion.li>
                        <motion.li variants={icons} className='icon'>{graphql}GraphQL</motion.li>
                        <motion.li variants={icons} className='icon'>{heroku}Heroku</motion.li>
                        <motion.li variants={icons} className='icon'>{netlify}Netlify</motion.li>
                        <motion.li variants={icons} className='icon'>{npm}npm</motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills