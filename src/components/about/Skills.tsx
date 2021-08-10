import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {javascript, html, css, react, redux, gatsby, tailwind, webpack, graphql, npm, heroku, netlify} from '../../images/icons'

function Skills() {
    // const animation = useAnimation()
    // const {ref, inView} = useInView({
    //     threshold: 0.4
    // })

    // useEffect(() => {
    //     if (inView) {
    //         animation.start('visible')
    //     }
    //     if(!inView) {
    //         animation.start('hidden')
    //     }
    // }, [inView])

    // const list = {
    //     visible: {
    //         x: 0, opacity: 1,
    //         transition: {
    //             delayChildren: .3,
    //             staggerChildren: .3,
    //             type: 'spring',
    //             duration: 2,
    //         }
    //     },
    //     hidden: {
    //         x: '-100vw', opacity: 0
    //     }
    // }

    return(
            <div className='w-screen mx-28 justify-center flex flex-col space-y-8 w-1/2 justify-between'>
                <h1 className='font-display text-4xl font-thin pt-12'>Skills</h1>
                <h2 className='font-display text-xl font-thin'>Languages and Frameworks</h2>
                <ul className='flex space-x-8 font-body 
                    px-8 py-4 shadow-2xl rounded-xl w-max'>
                    <li className='icon'>{html} HTML5</li>
                    <li className='icon'>{css} CSS3</li>
                    <li className='icon'>{javascript}Javascript</li>
                    <li className='icon'>{react}React</li>
                    <li className='icon'>{gatsby}Gatsby</li>
                    <li className='icon'>{tailwind}Tailwind</li>
                </ul>
                <h2 className='font-display text-xl font-thin'>Development Tools</h2>
                <ul className='flex space-x-8 font-body 
                    px-8 py-4 shadow-2xl rounded-xl w-max'>
                    <li className='icon'>{redux}Redux</li>
                    <li className='icon'>{webpack}Webpack</li>
                    <li className='icon'>{graphql}GraphQL</li>
                    <li className='icon'>{heroku}Heroku</li>
                    <li className='icon'>{netlify}Netlify</li>
                    <li className='icon'>{npm}npm</li>
                </ul>
            </div>
    )
}

export default Skills