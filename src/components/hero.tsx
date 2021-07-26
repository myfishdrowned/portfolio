import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

const Hero = () => {
    return (
        <div className="font-display flex flex-col justify-center items-center w-full h-screen m-auto 
        bg-bg-blue text-white tracking-wider text-center">
            <motion.div 
                initial ={{scale: 0}}
                animate={{ scale: 1.5 }}
                transition={{ duration: 1.25}}
            className='border p-4'>
                <h1 className=''>JUSTIN CAOVAN</h1>
                <p>Front End Developer</p>
            </motion.div>
        </div>
    )
}

export default Hero

