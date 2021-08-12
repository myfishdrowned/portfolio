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
        <div className='m-auto flex w-2/3 py-20 my-4'>
            <div className='w-1/4 flex flex-col justify-between'>
                <h1 className='font-display text-3xl font-thin'>Skills</h1>
            </div>

            <div className='flex w-3/4 space-x-8 divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                <div className='w-1/2'>
                    <h2 className='font-display text-lg'>Languages and Frameworks</h2>
                    <ul className='grid grid-rows-2 grid-cols-3 gap-y-12 justify-items-center font-body text-sm pt-12'>
                        <li className='icon'>{html} HTML5</li>
                        <li className='icon'>{css} CSS3</li>
                        <li className='icon'>{javascript}JavaScript</li>
                        <li className='icon'>{react}React</li>
                        <li className='icon'>{gatsby}Gatsby</li>
                        <li className='icon'>{tailwind}Tailwind</li>
                    </ul>
                </div>
                <div className='w-1/2'>
                    <h2 className='font-display text-lg'>Development Tools</h2>
                    <ul className='grid grid-rows-2 grid-cols-3 gap-y-12 font-body justify-items-center text-sm pt-12'>
                        <li className='icon'>{redux}Redux</li>
                        <li className='icon'>{webpack}Webpack</li>
                        <li className='icon'>{graphql}GraphQL</li>
                        <li className='icon'>{heroku}Heroku</li>
                        <li className='icon'>{netlify}Netlify</li>
                        <li className='icon'>{npm}npm</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills