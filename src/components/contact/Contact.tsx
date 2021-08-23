import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import linkedIn from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { navigate } from '@reach/router'

const Contact = () => {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [inView])

    const list = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
        hidden: {
             opacity: 0
        }
    }

    return (
        <div ref={ref} id='contact' data-scroll-section className='bg-graphite text-center h-full w-screen py-12'>
            <motion.div className='w-5/6 md:w-4/5 h-full m-auto pt-10'
                initial='visible'
                animate={animation}
                variants={list}>
                <div className='flex flex-col md:flex-row md:text-left align-start h-full md:space-x-16'>
                    <div className='flex flex-col space-y-12 w-full md:w-1/2 mb-12 md:mb-0 p-12 h-full bg-light-green text-graphite'>
                        <h2 className='font-display text-4xl'>
                            Say Hi!
                        </h2>
                        <p className='font-body md:text-lg tracking-wide leading-loose 2xl:w-2/3'>
                            Currently open for new opportunities or people to share ideas with! 
                            For any other information about me or my work, feel free to reach out!
                        </p>
                        <button className='m-auto md:text-left bg-black bg-opacity-90 font-body text-light-green h-full w-max mt-6 p-4
                        hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-yellow-500'>
                            View Resume
                        </button>

                        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
                            <a href='mailto:justincaovan@gmail.com' target='_blank' rel="noopener noreferrer"><p>Contact me at <br></br><span className='underline'>justincaovan@gmail.com</span></p></a>
                            <div>
                                <p>Or find me here</p>
                                <div className='flex justify-center space-x-2'>
                                    <a href='https://github.com/jtcaovan' target='_blank' rel="noopener noreferrer">
                                        <img className='h-5 w-5 hover:scale-125 active:scale-95 transition duration-150' src={github}/>
                                    </a>
                                    <a href='https://www.linkedin.com/in/justincaovan/' target='_blank' rel="noopener noreferrer">
                                        <img className='h-5 w-5 hover:scale-125 active:scale-95 transition duration-150' src={linkedIn}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-graphite font-body flex flex-col space-y-6 w-full md:w-1/2'>
                        <p className='font-display text-4xl text-light-green'>Send me a message!</p>
                        <ContactForm />
                    </div>
                </div>
                <div className='mt-14 flex flex-col space-y-16 justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{navigate('#')}} className="h-6 w-6 text-light-green m-auto animate-bounce cursor-pointer transition duration-150 hover:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                    <p className='text-light-green font-display text-sm'>Designed and developed by Justin Caovan © 2021</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact