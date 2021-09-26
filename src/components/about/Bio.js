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
    }, [inView])

    const list = {
        visible: {
            y: 0,
            opacity: 1,
            staggerChildren: .2,
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
                <h1 
                    className='my-8 md:my-0 md:-ml-22 lg:-ml-36 md:mt-8 bg-black bg-opacity-90 font-display text-light-green 
                    rounded-full h-24 w-24 flex items-center justify-center cursor-default'
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-3'>
                        <p className='tracking-wide transform transition duration-200 hover:scale-110 hover:tracking-wider hover:text-yellow-500'>
                            About Me
                        </p>
                </h1>
                <motion.p className='font-display px-6 text-graphite leading-relaxed text-lg md:text-2xl md:leading-loose'
                variants={list}>
                    I'm a front end web developer based in Phoenix, Arizona
                    who finds enjoyment in tinkering with and building intuitive web applications.
                    I'm constantly seeking opportunities to learn new concepts, technologies, and tools
                    in order to create the best possible user experience.
                </motion.p>
                <motion.button className='bg-black bg-opacity-90 font-display text-light-green h-full w-max mt-8 p-4
                hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-yellow-500' 
                onClick ={()=> {navigate('#contact')}}>Get In Touch</motion.button>
            </motion.div>
        </div>
    )
}

export default Bio