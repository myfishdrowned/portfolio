import React, {useState, useEffect, useRef} from 'react'
import NET from 'vanta/dist/vanta.net.min'
import { motion } from "framer-motion"
import * as THREE from 'three'
import linkedIn from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import gmail from "../../images/gmail.svg"

const Hero = () => {

    const container = {
        hidden: { y: '3vw', opacity : 0},
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {duration: 1}
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
            color: 0xFFFFFF,
            backgroundColor: 0x1E1E21,
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
            <div className='relative text-light-green font-display h-screen w-screen flex flex-col space-y-6 px-20 justify-center'>
                <motion.h1
                    data-scroll
                    data-scroll-direction='horizontal'
                    data-scroll-speed='-3'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='text-8xl'>
                        JUSTIN CAOVAN
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

                <div className='fixed bottom-10 right-10 flex flex-col space-y-2'>
                    <div className='bg-gray-200 m-auto p-2 rounded-full transform transition hover:scale-125 active:scale-95'>
                        <a href='https://github.com/jtcaovan' target='_blank' ><img className='h-5 w-5' src={github}/></a>
                    </div>
                    <div className='bg-blue-200 m-auto p-2 rounded-full transform transition duration:200 hover:scale-125 active:scale-95'>
                        <a href='https://www.linkedin.com/in/justincaovan/' target='_blank' ><img className='h-5 w-5' src={linkedIn}/></a>
                    </div>
                    <div className='bg-red-200 m-auto p-2 rounded-full transform transition hover:scale-125 active:scale-95'>
                        <a href='mailto:justincaovan@gmail.com' target='_blank'><img className='h-5 w-5' src={gmail}/> </a>
                    </div>
                </div>
            </div>        
        </div>    
    )
}

export default Hero