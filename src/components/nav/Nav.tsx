import React from "react";
import {motion} from 'framer-motion'
import logo from '../../images/logo.png'



const Nav = () => {
    const nav = {
        hidden: { y: '-50vw', opacity: 0},
        visible: {
            y: 0, 
            opacity: 1,
            transition: {
                type:'spring',
                duration: 3,
                delayChildren: 1.75, 
                staggerChildren: .3
            }
        },
        whileHover: {scale: 1.2},
    }

    const icon = {
        hidden: {opacity: 0, scale: 0 },
        visible: {
            opacity: 1, scale: 1,
            transition: {
                delay: 1.75,
                duration: 1
            },
        }
    }
    return (
        <div>
            <motion.img variants={icon} initial='hidden' animate='visible' className='absolute h-16 w-16 mt-8 ml-16' src={logo}></motion.img>
            <motion.ul 
            variants={nav}
            initial='hidden'
            animate='visible'
            className='absolute top-0 w-screen right-0 flex items-center font-display mt-8 mr-20 h-16 justify-end space-x-16'>
                <motion.li variants={nav}>About</motion.li>
                <motion.li variants={nav}>Projects</motion.li>
                <motion.li variants={nav}>Contact</motion.li>
            </motion.ul>
        </div>
    )
}

export default Nav