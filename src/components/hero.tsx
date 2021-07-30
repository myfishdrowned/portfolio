import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

const Hero = () => {
    return (
        <div>
            <motion.div 
                initial ={{x: '-50vw', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{ duration: 2 }}
                className='font-display w-3/4 h-screen flex flex-col 
                space-y-4 ml-24 justify-center'
            >
                <h1 className='text-8xl'>JUSTIN CAOVAN</h1>
                <p className='text-2xl'>FRONT END DEVELOPER</p>
            </motion.div>
        </div>
    )
}

export default Hero

