import React, {useEffect} from 'react'
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
        <div className='mb-20 text-center h-full overflow-hidden'>
            <div className='m-auto w-3/4 max-w-2xl'>
                <h1 
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-2'
                className='-ml-28 mt-8 bg-black font-body text-light-green rounded-full h-24 w-24 flex items-center justify-center'>About Me</h1>
                <p className='font-body text-2xl tracking-wider leading-loose'>
                    {/* Kinesiology and Sports Medicine graduate turned self-taught front-end developer? */}
                    Self-taught front end web developer based in Phoenix, Arizona.
                    {/* Enjoy the process of implementing and bringing ideas to life on screen. */}
                    Passion for building intuitive, digital user experiences across websites/applications
                    {/* Eager to learn new design concepts, technologies and tools - add to my skillset */}
                    Continuously looking to create and captivate through intuitive, (something) websites

                    {/* Currently open to new opportunities?  */}
                </p>
            </div>
            <button className='bg-black font-body text-light-green border-2 border-black w-max mt-6 p-4'>Get In Touch</button>
        </div>
    )
}

export default Bio