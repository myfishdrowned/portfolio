import React, {useState} from 'react'
import Modal from './Modal'

function ContactForm() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const API_URL = process.env.NODE_ENV === 'production' 
        ? 'https://portfolio-7ibm.onrender.com/api/contact'
        : 'http://localhost:5000/api/contact';
    
    async function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                setShowModal(true);
                setTimeout(() => setShowModal(false), 5000);
                e.target.reset();
            } else {
                setError(result.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className='flex flex-col h-full space-y-8 leading-loose tracking-wide' onSubmit={sendEmail}>
                <div className='flex space-x-4'>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Your name' 
                        required 
                        className='bg-light-green border-2 w-1/2 h-full rounded'
                        disabled={isLoading}
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Your email' 
                        required 
                        className='bg-light-green w-1/2 h-full rounded'
                        disabled={isLoading}
                    />
                </div>
                <input 
                    type='text' 
                    name='subject' 
                    placeholder='Subject' 
                    className='bg-light-green rounded'
                    disabled={isLoading}
                />
                <textarea 
                    name='message' 
                    placeholder='Your message...' 
                    required 
                    className='bg-light-green h-2/3 rounded'
                    disabled={isLoading}
                />
                <input 
                    type='submit' 
                    value={isLoading ? 'Sending...' : 'Send Message'} 
                    className='bg-light-green text-center p-4 font-body cursor-pointer rounded hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                />
                {error && (
                    <p className='text-red-500 text-sm mt-2'>{error}</p>
                )}
            </form>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ContactForm