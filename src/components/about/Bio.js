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
                        Experienced Identity and Access Management (IAM) professional with a strong background in the design, development, and deployment of SailPoint IdentityIQ and IdentityNow solutions across on-premises and cloud environments. Proven expertise in implementing and configuring key SailPoint modules, including Application Onboarding, Compliance, and Lifecycle Management (LCM).

                        Skilled in integrating and deploying SailPoint products in client environments, with hands-on experience developing provisioning rules to manage user account operations such as creation, deletion, enabling, and disabling. Adept at customizing and configuring provisioning and deprovisioning workflows across internal and external systems.

                        Experienced in configuring data aggregation from applications such as Active Directory, LDAP, and Delimited Files. Proficient in maintaining and refreshing Identity Cubes to enforce roles and policies. Familiar with designing and executing Joiner-Mover-Leaver (JML) workflows to automate identity lifecycle processes.

                        Strong knowledge of Role-Based Access Control (RBAC), entitlement management, and role mining. Proficient in Single Sign-On (SSO), identity provisioning, certification campaigns, and access governance. Skilled in writing complex SQL queries, stored procedures, and managing data imports/exports.

                        Passionate about building secure, scalable identity infrastructures that support organizational compliance and user experience goals.

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