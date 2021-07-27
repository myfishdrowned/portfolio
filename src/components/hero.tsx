import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

const Hero = () => {
    return (
        <div className="font-display flex flex-col justify-center items-center w-full h-screen m-auto 
        bg-gray-600 text-white tracking-wider text-center py-16">
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

