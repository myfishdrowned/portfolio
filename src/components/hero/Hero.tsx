import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
    const container = {
        hidden: { x: '-50vw', opacity : 0},
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {type: 'spring', duration: 2}
        }
    }

    return (
        <div className='font-display w-3/4 h-screen flex flex-col 
        space-y-4 ml-24 justify-center'>
            <motion.h1 
                variants={container}
                initial="hidden"
                animate="visible"
                className='text-8xl'
            >JUSTIN CAOVAN
            </motion.h1>
            <motion.p 
                initial={{ x: '-50vw', opacity: 0}}
                animate={{ x: 0, opacity: 1, transition: {type: 'spring', duration: 3, delay: 1}}}
                className='text-2xl'>
                FRONT END DEVELOPER</motion.p>
        </div>
    )
}

export default Hero

