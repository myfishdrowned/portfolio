import React from 'react'
import ContactForm from './ContactForm'
import linkedIn from "../../images/linkedin.svg"
import github from "../../images/github.svg"

const Contact = () => {
    return (
        <div data-scroll-section className='bg-graphite text-center h-full w-screen py-12'>
            <div className='w-4/5 h-full m-auto pt-10'>
                {/* <h1 className='mx-auto py-6 text-5xl text-light-green font-display'>Contact</h1> */}
                <div className='flex text-left align-start h-full space-x-16'>
                    <div className='flex flex-col space-y-12 w-1/2 p-12 h-full bg-light-green text-graphite'>
                        <h2 className='font-display text-4xl'>Say Hi!</h2>
                        <p className='font-body text-lg tracking-wide leading-loose 2xl:w-2/3'>Currently open for new opportunities or people to share ideas with! For any other information about me or my work, feel free to reach out!</p>
                        <button className='text-left bg-black bg-opacity-90 font-body text-light-green h-full w-max mt-6 p-4
                hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl'>View Resume</button>
                        <div className='flex justify-between'>
                            <a href='mailto:justincaovan@gmail.com' target='_blank'><p>Contact me at <br></br><span className='underline'>justincaovan@gmail.com</span></p></a>
                            <div>
                                <p>Or find me here</p>
                                <div className='flex space-x-2'>
                                    <a href='https://github.com/jtcaovan' target='_blank' ><img className='h-5 w-5 hover:scale-125 transition duration-150' src={github}/></a>
                                    <a href='https://www.linkedin.com/in/justincaovan/' target='_blank' ><img className='h-5 w-5 hover:scale-125 transition duration-150' src={linkedIn}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-graphite font-body flex flex-col space-y-6 w-1/2'>
                        <p className='font-display text-4xl text-light-green'>Send me a message!</p>
                        <ContactForm />
                    </div>
                </div>
                    <p className='text-light-green'>Back to Top Arrow</p>
                    <p className='text-light-green font-body text-sm'>Designed and developed by Justin Caovan © 2021</p>
            </div>
        </div>
    )
}

export default Contact