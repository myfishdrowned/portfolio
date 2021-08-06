import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

function Bio() {

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
            x: '100vw', opacity: 0,
        }
    }

    return(
        <div ref={ref} className='bg-tan border border-tan shadow-lg w-5/12 h-5/6 absolute top-0 right-0 p-12 mr-10 h-full'>
            <motion.div
            initial='hidden' 
            animate={animation} 
            variants={list}
            className='flex flex-col space-y-8 justify-between'>
                <motion.h1 variants={list} className='font-display text-4xl text-center'>About Me</motion.h1>
                <motion.p variants={list} className='font-body text-lg tracking-wider leading-loose'>
                    Kinesiology and Sports Medicine graduate turned self-taught front-end developer?
                    self-taught web developer based in Phoenix, Arizona.
                    Enjoy the process of implementing ideas and bringing them to life on screen.
                    Passion for building intuitive, digital user experiences across websites/applications
                    Eager to learn new design concepts, technologies and tools - add to my skillset
                    Continuously looking to Create and captivate through intuitive, **** websites

                    Currently open to new opportunities?
                </motion.p>
                <motion.button variants={list} className='border-2 border-black w-max p-4'>View my Resume arrow </motion.button>
            </motion.div> 
        </div>
    )
}

export default Bio