import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"
import { navigate } from '@reach/router'

function Bio() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.6
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } 
    }, [inView, animation])

    const list = {
        visible: {
            y: 0,
            opacity: 1,
            staggerChildren: 1,
            delayChildren: 1,
            transition: {
                duration: 1.5, 
           }
        },
        hidden: {
            y: '10vw',
            opacity: 0
        }
    }

    return(
        <div ref={ref} className='mb-20 text-center h-full overflow-hidden'>
            <motion.div className='m-auto w-11/12 md:w-3/4 max-w-3xl'
                    initial='hidden' 
                    animate={animation} 
                    variants={list}>
                <div className='my-8 md:my-0 md:-ml-22 lg:-ml-36 md:mt-8 bg-black bg-opacity-90 font-display text-light-green 
                    rounded-full h-24 w-24 flex items-center justify-center cursor-default'
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-4'>
                    <p className='tracking-wide transform transition duration-200 hover:scale-110 hover:tracking-wider hover:text-yellow-500'>
                        About Me
                    </p>
                </div>
                <motion.div className='font-display px-12 text-graphite'
                variants={list}>
                    <motion.p className='text-lg md:text-xl text-justify tracking-tight leading-relaxed md:leading-loose'
                        variants={list}>
                        I'm a Front End Developer based out of Phoenix, Arizona.
                        I love the creative process of 
                        building visually appealing designs and interactive user interfaces. 
                        I'm constantly seeking opportunities to learn new concepts, technologies, and tools
                        to create the best possible user experience. Outside of coding, I'm an amateur rock climber,
                        a semi-professional pitcher of crumpled paper balls for my cat Mango, and an avid reader of
                        fantasy books.

                    </motion.p>
                    <motion.button className='bg-black bg-opacity-90 text-light-green h-full w-max mt-8 p-4
                    hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-yellow-500'
                    variants={list}
                    onClick ={()=> {navigate('#contact')}}>Get In Touch</motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Bio