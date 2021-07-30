import React from "react";
import {motion} from 'framer-motion'

const Nav = () => {
    return (
        <motion.div
            initial={{y: '-50vh'}}
            animate={{y: 0}}
            transition={{ duration: 2.25}}>
            <ul className='absolute top-0 right-0 flex font-display mt-8 mr-10 h-16 justify-end space-x-12'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </motion.div>
    )
}

export default Nav