import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"
import { navigate } from '@reach/router'

function Bio() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.6
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } 
    }, [inView, animation])

    const list = {
        visible: {
            y: 0,
            opacity: 1,
            staggerChildren: 1,
            delayChildren: 1,
            transition: {
                duration: 1.5, 
           }
        },
        hidden: {
            y: '10vw',
            opacity: 0
        }
    }

    return(
        <div ref={ref} className='mb-20 text-center h-full overflow-hidden'>
            <motion.div className='m-auto w-11/12 md:w-3/4 max-w-3xl'
                    initial='hidden' 
                    animate={animation} 
                    variants={list}>
                <div className='my-8 md:my-0 md:-ml-22 lg:-ml-36 md:mt-8 bg-black bg-opacity-90 font-display text-light-green 
                    rounded-full h-24 w-24 flex items-center justify-center cursor-default'
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-4'>
                    <p className='tracking-wide transform transition duration-200 hover:scale-110 hover:tracking-wider hover:text-yellow-500'>
                        About Me
                    </p>
                </div>
                <motion.div className='font-display px-12 text-graphite'
                variants={list}>
                    <motion.p className='text-lg md:text-xl text-justify tracking-tight leading-relaxed md:leading-loose'
                        variants={list}>
                        I'm an experienced Identity and Access Management (IAM) professional with a solid track record designing, developing, and deploying SailPoint IdentityIQ and IdentityNow solutions across both on-prem and cloud environments. I specialize in application onboarding, compliance, and lifecycle management, and have hands-on experience integrating SailPoint into client systems to streamline provisioning, deprovisioning, and access governance.

                        <br />
                        <br />

                        From configuring workflows and provisioning rules to aggregating data from sources like Active Directory, LDAP, and flat files, I enjoy building secure, scalable identity solutions. I'm also well-versed in JML (Joiner-Mover-Leaver) processes, RBAC, entitlement management, and role mining. Whether it's writing complex SQL queries or leading certification campaigns, I'm passionate about using IAM to enhance security, support compliance, and improve the user experience.

                    </motion.p>
                    <motion.button className='bg-black bg-opacity-90 text-light-green h-full w-max mt-8 p-4
                    hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200 shadow-2xl hover:text-yellow-500'
                    variants={list}
                    onClick ={()=> {navigate('#contact')}}>Get In Touch</motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Bio