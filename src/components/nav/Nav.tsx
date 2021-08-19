import React from "react";
import {motion} from 'framer-motion'
import { navigate } from '@reach/router'

const Nav = () => {
    const nav = {
        hidden: { y: '-50vw', opacity: 0},
        visible: {
            y: 0, 
            opacity: 1,
            transition: {
                type:'spring',
                bounce: .1,
                duration: 2.2,
                delayChildren: .7, 
                staggerChildren: .3
            },
        },
    }

    return (
        <div data-scroll-section className='relative z-10'>
            <motion.ul className='absolute top-0 right-0 my-12 mx-14 flex font-display justify-end space-x-16 text-light-green'
                variants={nav}
                initial='hidden'
                animate='visible'>
                    <motion.li className='border-light-green hover:border-b cursor-pointer' whileHover={{scale: 1.2}} onClick ={()=> {navigate('#about')}} variants={nav}>About</motion.li>
                    <motion.li className='border-light-green hover:border-b cursor-pointer' whileHover={{scale: 1.2}} onClick ={()=> {navigate('#portfolio')}} variants={nav}>Projects</motion.li>
                    <motion.li className='border-light-green hover:border-b cursor-pointer' whileHover={{scale: 1.2}} onClick ={()=> {navigate('#contact')}} variants={nav}>Contact</motion.li>
            </motion.ul>
        </div>
    )
}

export default Nav