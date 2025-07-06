import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {javascript, typescript, html, css, react, redux, gatsby, tailwind, webpack, framer, npm, heroku, netlify, git, sass, figma} from '../../images/icons'

function Skills() {
    const animation = useAnimation()
    const {ref, inView} = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [inView, animation])

    const header = {
        visible: {
            y: 0, opacity: 1,
            transition: {
                staggerChildren: .1,
                delayChildren: .1, 
                duration: 1,
            }
        },
        hidden: {
            y: '5vw', opacity: 0
        }
    }

    const icons = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 0
        }
    }

    return(
        <div ref={ref} className='flex flex-col max-w-6xl space-y-12 lg:space-y-24  w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4'>
            <div className='flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 w-full text-center lg:text-left m-auto'>
                <motion.h1 initial='hidden' animate={animation} variants={header} className='font-display text-4xl lg:w-1/4'>
                    Skills
                </motion.h1>
                <motion.p initial='hidden' animate={animation} variants={header} className='font-body lg:text-lg leading-loose lg:leading-loose lg:w-3/4'>
                        Experienced Identity and Access Management (IAM) professional with expertise in SailPoint IdentityIQ and IdentityNow solutions. Skilled in implementing provisioning workflows, role-based access control, and identity governance across enterprise environments.
                </motion.p>
            </div>

            <div className='flex flex-col w-full text-center space-y-24 lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 lg:divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                <motion.div className='w-full lg:w-1/2'           
                    initial='hidden'
                    animate={animation}
                    variants={header}>
                    <motion.h2 variants={header} className='font-display text-lg'>IAM Platforms</motion.h2>
                    <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                        <motion.li variants={icons} className='icon'>SailPoint</motion.li>
                        <motion.li variants={icons} className='icon'>IdentityNOW</motion.li>
                        <motion.li variants={icons} className='icon'>Okta</motion.li>
                        <motion.li variants={icons} className='icon'>Secret Server</motion.li>
                        <motion.li variants={icons} className='icon'>ServiceNOW</motion.li>
                        <motion.li variants={icons} className='icon'>Varonis</motion.li>
                        <motion.li variants={icons} className='icon'>AWS</motion.li>
                        <motion.li variants={icons} className='icon'>UiPath (RPA)</motion.li>
                        <motion.li variants={icons} className='icon'>JIRA</motion.li>
                        <motion.li variants={icons} className='icon'>Confluence</motion.li>
                    </motion.ul>
                </motion.div>
                <motion.div className='w-full lg:w-1/2'
                        initial='hidden'
                        animate={animation}
                        variants={header}>
                    <motion.h2 variants={header} className='font-display text-lg'>Development Skills</motion.h2>
                    <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                        <motion.li variants={icons} className='icon'>Java</motion.li>
                        <motion.li variants={icons} className='icon'>C#</motion.li>
                        <motion.li variants={icons} className='icon'>PowerShell</motion.li>
                        <motion.li variants={icons} className='icon'>VBA Script</motion.li>
                        <motion.li variants={icons} className='icon'>Shell Scripting</motion.li>
                        <motion.li variants={icons} className='icon'>SQL</motion.li>
                        <motion.li variants={icons} className='icon'>Active Directory</motion.li>
                        <motion.li variants={icons} className='icon'>LDAP</motion.li>
                        <motion.li variants={icons} className='icon'>RBAC</motion.li>
                        <motion.li variants={icons} className='icon'>SSO</motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills