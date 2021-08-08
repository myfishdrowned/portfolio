import React from "react";
import {motion} from 'framer-motion'
import logo from '../../images/logo.png'



const Nav = () => {
    // const icon = {
    //     hidden: {opacity: 0, scale: 0 },
    //     visible: {
    //         opacity: 1, scale: 1,
    //         transition: {
    //             delay: 1.75,
    //             duration: 1
    //         },
    //     },
    // }
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
        <div className='relative z-10'>
            {/* <motion.img
                variants={icon}
                initial='hidden'
                animate='visible'
                className='h-16 absolute top-0 left-0 m-6'
                src={logo}></motion.img> */}

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