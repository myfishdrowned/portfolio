import React, {useState, useEffect, useRef} from 'react'
import NET from 'vanta/dist/vanta.net.min'
import { motion } from "framer-motion"
import * as THREE from 'three'
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
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(NET({
            THREE: THREE,
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            backgroundColor: 0xF1F6FA,
            points: 15.00,
            spacing: 17.00,
            showDots: false,
        }))
        }
          return () => {
            if (vantaEffect) vantaEffect.destroy()
          }
        }, [vantaEffect])
      
    return (
        <div data-scroll-section ref={myRef}>
            <div
            className='relative font-display h-screen w-screen flex flex-col space-y-6 px-20 justify-center'>
                <motion.h1
                    data-scroll
                    data-scroll-direction='horizontal'
                    data-scroll-speed='-3'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='text-8xl'
                >JUSTIN CAOVAN
                </motion.h1>
                <motion.div
                    variants={container}
                    initial={{ x: '-50vw', opacity: 0}}
                    animate={{ x: 0, opacity: 1, transition: {type: 'spring', duration: 3, delay: 1}}}
                    className='flex -space-x-2 text-2xl'>
                        <p 
                        data-scroll
                        data-scroll-position='top'
                        data-scroll-direction='horizontal'
                        data-scroll-speed='1'>FRONT &nbsp;</p>
                        <p
                             data-scroll
                             data-scroll-position='top'
                             data-scroll-direction='vertical'
                             data-scroll-speed='1'>END &nbsp;</p>
                        <p
                             data-scroll
                             data-scroll-position='top'
                             data-scroll-direction='vertical'
                             data-scroll-speed='-1'>DEVELOPER</p>
                </motion.div>
                <div className='absolute bottom-10 right-10 flex flex-col space-y-2'>
                    <img className='h-6 w-6 ' src={linkedIn}/>
                    <img className='h-6 w-6 ' src={github}/>
                    <img className='h-6 w-6 ' src={gmail}/>
                </div>
            </div>        
        </div>    
    )
}

export default Hero