import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

function Experience() {
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

    const item = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        },
        hidden: {
            opacity: 0,
            y: 20
        }
    }

    return(
        <div ref={ref} className='flex flex-col max-w-6xl space-y-12 lg:space-y-24  w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4'>
            <div className='flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 w-full text-center lg:text-left m-auto'>
                <motion.h1 initial='hidden' animate={animation} variants={header} className='font-display text-4xl lg:w-1/4'>
                    Experience
                </motion.h1>
                <motion.p initial='hidden' animate={animation} variants={header} className='font-body lg:text-lg leading-loose lg:leading-loose lg:w-3/4'>
                    Professional experience in Identity and Access Management with expertise in SailPoint IdentityIQ and IdentityNow solutions across enterprise environments.
                </motion.p>
            </div>

            <div className='flex flex-col w-full space-y-16'>
                {/* Fiserv Experience */}
                <motion.div className='w-full'           
                    initial='hidden'
                    animate={animation}
                    variants={header}>
                    <motion.div variants={item} className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-6'>
                        <div>
                            <h2 className='font-display text-2xl text-light-green'>IAM Engineer</h2>
                            <p className='font-body text-lg'>Fiserv · Full-time</p>
                        </div>
                        <div className='text-right mt-2 lg:mt-0'>
                            <p className='font-body text-sm'>Jan 2024 - Present · 1 yr 7 mos</p>
                            <p className='font-body text-sm'>Berkeley Heights, NJ · Hybrid</p>
                        </div>
                    </motion.div>
                    
                    <motion.div variants={item} className='mb-6'>
                        <h3 className='font-display text-lg mb-2'>Platforms & Skills:</h3>
                        <p className='font-body text-sm leading-relaxed'>
                            SailPoint, IdentityNOW, Okta, Secret Server, ServiceNOW, Varonis, AWS, UiPath (RPA), JIRA, Confluence, Java, C#, PS Script, VBA Script, Shell scripting, SQL
                        </p>
                    </motion.div>

                    <motion.div variants={item}>
                        <h3 className='font-display text-lg mb-3'>Key Responsibilities:</h3>
                        <ul className='font-body text-sm space-y-2 leading-relaxed'>
                            <li>• Gathered requirements from the application team and performed design analysis to integrate IdentityIQ. Lead App onboarding meetings with business owners to integrate new applications into SailPoint for governance and provisioning access.</li>
                            <li>• Developed custom workflows with approvals and modified OOTB workflows as per client requirements.</li>
                            <li>• Involved in various patch upgrades including version upgrades.</li>
                            <li>• Involved in designing, requirement gathering, talking to the business team, development and deployment of SailPoint IIQ</li>
                            <li>• Responsible for Developing and applying storage strategies and disaster-recovery plan for a large operational database that guaranteed recovery performance and high availability</li>
                            <li>• Developed rules in Beanshell – Application rules, identity trigger rules, aggregation rules, connector rules, certification rules, and policy rules.</li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* The Home Depot Experience */}
                <motion.div className='w-full'           
                    initial='hidden'
                    animate={animation}
                    variants={header}>
                    <motion.div variants={item} className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-6'>
                        <div>
                            <h2 className='font-display text-2xl text-light-green'>SailPoint Developer</h2>
                            <p className='font-body text-lg'>The Home Depot · Contract</p>
                        </div>
                        <div className='text-right mt-2 lg:mt-0'>
                            <p className='font-body text-sm'>Nov 2022 - Dec 2023 · 1 yr 2 mos</p>
                            <p className='font-body text-sm'>Atlanta, Georgia, United States · Hybrid</p>
                        </div>
                    </motion.div>

                    <motion.div variants={item}>
                        <h3 className='font-display text-lg mb-3'>Key Responsibilities:</h3>
                        <ul className='font-body text-sm space-y-2 leading-relaxed'>
                            <li>• Led the design, implementation, and development of SailPoint IdentityIQ, serving as the IAM/IDM technical expert for the Operations team.</li>
                            <li>• Implemented Access Certification, automated provisioning workflows, and governance controls in IIQ.</li>
                            <li>• Built and optimized Lifecycle Manager workflows, lifecycle and certification events, custom email templates, and task definitions.</li>
                            <li>• Integrated key connectors (Active Directory, PeopleSoft, Salesforce, ServiceNow) and enhanced AD attribute management.</li>
                            <li>• Automated cloud-application account creation and updates, maximizing self-service and password-management features in SailPoint.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Experience 