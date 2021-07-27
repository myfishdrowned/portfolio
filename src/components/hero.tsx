import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

const Hero = () => {
    return (
        <div className="font-display flex flex-col justify-center items-center 
        w-full h-screen m-auto text-white tracking-wider text-center
        bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
            <motion.div 
                initial ={{scale: 0, opacity: 0}}
                animate={{ scale: 1.5, opacity: 1}}
                whileHover={{scale: 1.7}}
                transition={{ duration: 1}}
            className='border rounded-sm border-opacity-50 p-4 shadow-2xl hover:border-opacity-100'>
                <h1>JUSTIN CAOVAN</h1>
                <p>Front End Developer</p>
            </motion.div>
        </div>
    )
}

export default Hero

