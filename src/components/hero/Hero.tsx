import React, {useState, useEffect, useRef} from 'react'
import NET from 'vanta/dist/vanta.net.min'
import { motion } from "framer-motion"
import * as THREE from 'three'
import linkedIn from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import gmail from "../../images/gmail.svg"
import hero from "../../images/hero.jpg"

const Hero = () => {
    const container = {
        hidden: { x: '-50vw', opacity : 0},
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {type: 'spring', duration: 2}
        }
    }

    const MyComponent = () => {
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
                points: 8.00,
                spacing: 17.00
            }))
          }
          return () => {
            if (vantaEffect) vantaEffect.destroy()
          }
        }, [vantaEffect])
        return <div ref={myRef}>
        <div className='relative font-display h-screen w-screen flex flex-col space-y-4 px-20 justify-center'>
            <div>
            </div>
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
    </div>
      }
      
    return (
        <MyComponent />
    )
}

export default Hero

