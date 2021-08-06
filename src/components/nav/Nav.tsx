import React from "react";
import {motion} from 'framer-motion'



const Nav = () => {
    const container = {
        hidden: { y: '-50vw', opacity: 0},
        visible: {
            y: 0, opacity: 1, transition: {type:'spring', duration: 3, delay: 1.5}
        }
    }
    return (
        <motion.ul 
        variants={container}
        initial='hidden'
        animate='visible'
        className='absolute top-0 right-0 flex font-display mt-8 mr-20 h-16 justify-end space-x-16'>
            <motion.li>About</motion.li>
            <motion.li>Projects</motion.li>
            <motion.li>Contact</motion.li>
        </motion.ul>
    )
}

export default Nav