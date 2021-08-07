import React, {useState, useEffect, useRef} from 'react'
import { motion } from "framer-motion"
import linkedIn from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import gmail from "../../images/gmail.svg"

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
        <div className='relative font-display h-screen flex flex-col space-y-4 px-20 justify-center'>
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
                FRONT END DEVELOPER
            </motion.p>
            <div className='absolute bottom-10 left-10 flex flex-col space-y-2'>
                <img className='h-6 w-6' src={linkedIn}/>
                <img className='h-6 w-6' src={github}/>
                <img className='h-6 w-6' src={gmail}/>
            </div>
        </div>
    )
}

export default Hero

