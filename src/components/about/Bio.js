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
            <motion.div 
                    initial='hidden' 
                    animate={animation} 
                    variants={list}
                    className='m-auto w-3/4 max-w-2xl'>
                <h1 
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-3'
                    className='my-8 md:my-0 md:-ml-36 md:mt-8 bg-black bg-opacity-90 font-display text-light-green 
                    rounded-full h-24 w-24 flex items-center justify-center cursor-default'>
                        <p className='tracking-wide transform transition duration-200 hover:scale-110 hover:tracking-wider hover:text-yellow-500'>
                            About Me
                        </p>
                </h1>
                <motion.p className='font-body text-graphite leading-relaxed text-lg md:text-2xl md:leading-loose'
                variants={list}>
                    I'm a self-taught front end web developer based in Phoenix, Arizona.
                    Passion for building intuitive, digital user interfaces across websites and applications.
                    Continuously looking for ways to improve my craft by creating the best possible user experiences.
                    
                    {/* With a passion for building intuitive, digital user interfaces, I'm continuously looking for ways to improve my skills and knowledge as a developer. */}
                    {/* Continuously looking to create and captivate through intuitive, something websites. */}

                    {/* Kinesiology and Sports Medicine graduate turned self-taught front-end developer? */}
                    {/* Enjoy the process of implementing and bringing ideas to life on screen. */}
                    {/* Eager to learn new design concepts, technologies and tools - add to my skillset */}
                    {/* Currently open to new opportunities?  */}
                </motion.p>
                <motion.button className='bg-black bg-opacity-90 font-display text-light-green h-full w-max mt-8 p-4
                hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-yellow-500' 
                onClick ={()=> {navigate('#contact')}}>Get In Touch</motion.button>
            </motion.div>
        </div>
    )
}

export default Bio