import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


function Bio() {
    // const animation = useAnimation()
    // const {ref, inView} = useInView({
    //     threshold: 0.1
    // })

    // useEffect(() => {
    //     if (inView) {
    //         animation.start('visible')
    //     }
    //     if(!inView) {
    //         animation.start('hidden')
    //     }
    // }, [inView])

    // const list = {
    //     visible: {
    //         x: 0,
    //         transition: {
    //             delayChildren: .2,
    //             staggerChildren: .4,
    //             type: 'spring',
    //             duration: 2,
    //         }
    //     },
    //     hidden: {
    //         x: '50vw'
    //     }
    // }

    return(
        <div className='relative w-screen my-16 text-center h-full'>
            <div className='m-auto w-1/2 max-w-2xl'>
                <h1 className='-ml-24 mt-8 bg-black text-light-green rounded-full h-24 w-24 flex items-center justify-center'>About Me</h1>
                <p  className='font-body text-lg tracking-wider leading-loose'>
                    {/* Kinesiology and Sports Medicine graduate turned self-taught front-end developer? */}
                    Self-taught front end web developer based in Phoenix, Arizona.
                    Enjoy the process of implementing and bringing ideas to life on screen.
                    Passion for building intuitive, digital user experiences across websites/applications
                    Eager to learn new design concepts, technologies and tools - add to my skillset
                    Continuously looking to create and captivate through intuitive, (something descriptive) websites

                    Currently open to new opportunities? 
                </p>
            </div>
            <button className='bg-black text-light-green border-2 border-black w-max p-4'>View my Resume arrow </button>
        </div>
    )
}

export default Bio