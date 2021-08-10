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
        <div className='w-screen m-auto flex w-2/3 py-14 justify-between'>
            <div className='w-1/2'>
                <h1 className='font-display text-2xl font-thin'>Skills</h1>
            </div>

            <div className='flex flex-col w-1/2 space-y-16 divide-y divide-black text-center'>
                <div>
                    <h2 className='font-display text-lg font-thin'>Languages and Frameworks</h2>
                    <ul className='grid grid-rows-2 grid-cols-3 gap-y-10 justify-items-center font-body text-sm pt-12'>
                        <li className='icon'>{html} HTML5</li>
                        <li className='icon'>{css} CSS3</li>
                        <li className='icon'>{javascript}JavaScript</li>
                        <li className='icon'>{react}React</li>
                        <li className='icon'>{gatsby}Gatsby</li>
                        <li className='icon'>{tailwind}Tailwind</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-display text-lg font-thin pt-6'>Development Tools</h2>
                    <ul className='grid grid-rows-2 grid-cols-3 gap-y-10 font-body justify-items-center text-sm pt-12'>
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