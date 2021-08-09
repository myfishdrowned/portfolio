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
        hover: {
            scale: 1.2
        }
    }


    return (
        <div data-scroll-section className='relative z-10'>

            <motion.ul 
                variants={nav}
                initial='hidden'
                animate='visible'
                className='absolute top-0 right-0 my-12 mx-14 flex font-display justify-end space-x-16'>
                    <motion.li className='transform'
                    variants={nav}>About</motion.li>

                    <motion.li variants={nav}            
                    >Projects</motion.li>

                    <motion.li variants={nav}
                    >Contact</motion.li>
            </motion.ul>
        </div>
    )
}

export default Nav