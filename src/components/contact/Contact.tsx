import React from 'react'

const Contact = () => {
    return (
        <div data-scroll-section className='bg-graphite text-light-green text-center m-auto h-full w-screen py-8'>
            <div 
            data-scroll
            data-scroll-speed='1'
            className='w-3/4 h-full rounded-lg m-auto p-4'>
                {/* <h1 className='m-auto text-5xl font-display'>Contact</h1> */}
                <div className='flex'>
                    <div className='flex flex-col text-left w-1/2 h-full bg-light-green text-black'>
                        <h2 className='font-display text-4xl'>Get in Contact!</h2>
                        <p className='font-body text-xl'>Currently open for new opportunities</p>
                        <p>Contact me at justincaovan@gmail.com</p>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <input type='text' name='name' placeholder='Your Name'/>
                        <input type='text' name='email' placeholder='Your Email'/>
                        <input type='text' name='message' placeholder='Your Name'/>
                        <button>Submit</button>
                    </div>
                </div>
                    <p>Back to Top Arrow</p>
            </div>
        </div>
    )
}

export default Contact