import React, {useEffect, useRef} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"

function Bio() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.7
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
            staggerChildren: 5,
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
                    data-scroll-speed='-2'
                className='-ml-28 mt-8 bg-black font-body text-light-green rounded-full h-24 w-24 flex items-center justify-center'>About Me</h1>
                <motion.p variants={list} className='about font-body text-2xl tracking-wider leading-loose'>
                    Self-taught front end web developer based in Phoenix, Arizona.
                    Passion for building intuitive, digital user experiences across websites/applications
                    Continuously looking to create and captivate through intuitive, (something) websites

                    {/* Kinesiology and Sports Medicine graduate turned self-taught front-end developer? */}
                    {/* Enjoy the process of implementing and bringing ideas to life on screen. */}
                    {/* Eager to learn new design concepts, technologies and tools - add to my skillset */}
                    {/* Currently open to new opportunities?  */}
                </motion.p>
                <motion.button className='bg-black font-body text-light-green border-2 border-black w-max mt-6 p-4'>Get In Touch</motion.button>
            </motion.div>
        </div>
    )
}

export default Bio