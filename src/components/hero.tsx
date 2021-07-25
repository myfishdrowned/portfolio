import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="font-display flex flex-col justify-center items-center w-full h-screen m-auto 
        bg-bg-blue text-white tracking-wider text-center">
            <motion.div className='border p-4'
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 2 }}
                    >
                <h1 className=''>JUSTIN CAOVAN</h1>
                <p>Front End Developer</p>
            </motion.div>
        </div>
    )
}

export default Hero

