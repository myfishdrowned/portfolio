import React, {useState} from 'react'
import Modal from './Modal'
import emailjs from 'emailjs-com'
import motion from 'framer-motion'

function ContactForm() {
    const [showModal, setShowModal] = useState(false);
    
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_rs4y67i', 'template_2riakpn', e.target, 'user_JWqSxUHm6SLQaZVA0CXO7')
          .then((result) => {
              setShowModal(true)
              setTimeout(() => setShowModal(false), 5000);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <>
            <form className='flex flex-col h-full space-y-8 leading-loose tracking-wide' onSubmit={sendEmail}>
                <div className='flex space-x-4'>
                    <input type='text' name='name' placeholder='Your name' required className='bg-light-green w-1/2 rounded'/>
                    <input type='email' name='email' placeholder='Your email' required className='bg-light-green w-1/2 rounded'/>
                </div>
                <input type='text' name='subject' placeholder='Subject' className='bg-light-green rounded'/>
                <textarea name='message' placeholder='Your message...' required className='bg-light-green h-2/3 rounded'/>
                <input type='submit' value='Send Message' className='bg-light-green text-center p-4 font-body cursor-pointer rounded hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200'/>
            </form>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ContactForm