import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

// Helper to calculate duration string
function getDurationString(start, end) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    let result = '';
    if (years > 0) result += `${years} yr${years > 1 ? 's' : ''} `;
    result += `${months} mo${months !== 1 ? 's' : ''}`;
    return result.trim();
}

const experienceData = [
    {
        title: 'IAM Engineer',
        company: 'Fiserv',
        type: 'Full-time',
        start: '2024-01-01',
        end: null, // Present
        location: 'Berkeley Heights, NJ',
        mode: 'Hybrid',
        platforms: 'SailPoint, IdentityNOW, Okta, Secret Server, ServiceNOW, Varonis, AWS, UiPath (RPA), JIRA, Confluence, Java, C#, PS Script, VBA Script, Shell scripting, SQL',
        responsibilities: [
            'Gathered requirements from the application team and performed design analysis to integrate IdentityIQ. Lead App onboarding meetings with business owners to integrate new applications into SailPoint for governance and provisioning access.',
            'Developed custom workflows with approvals and modified OOTB workflows as per client requirements.',
            'Involved in various patch upgrades including version upgrades.',
            'Involved in designing, requirement gathering, talking to the business team, development and deployment of SailPoint IIQ',
            'Responsible for Developing and applying storage strategies and disaster-recovery plan for a large operational database that guaranteed recovery performance and high availability',
            'Developed rules in Beanshell – Application rules, identity trigger rules, aggregation rules, connector rules, certification rules, and policy rules.'
        ]
    },
    {
        title: 'SailPoint Developer',
        company: 'The Home Depot',
        type: 'Contract',
        start: '2022-11-01',
        end: '2023-12-31',
        location: 'Atlanta, Georgia, United States',
        mode: 'Hybrid',
        responsibilities: [
            'Led the design, implementation, and development of SailPoint IdentityIQ, serving as the IAM/IDM technical expert for the Operations team.',
            'Implemented Access Certification, automated provisioning workflows, and governance controls in IIQ.',
            'Built and optimized Lifecycle Manager workflows, lifecycle and certification events, custom email templates, and task definitions.',
            'Integrated key connectors (Active Directory, PeopleSoft, Salesforce, ServiceNow) and enhanced AD attribute management.',
            'Automated cloud-application account creation and updates, maximizing self-service and password-management features in SailPoint.'
        ]
    }
];

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
                {experienceData.map((exp, idx) => (
                    <motion.div className='w-full' key={idx}
                        initial='hidden'
                        animate={animation}
                        variants={header}>
                        <motion.div variants={item} className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-6'>
                            <div>
                                <h2 className='font-display text-2xl text-light-green'>{exp.title}</h2>
                                <p className='font-body text-lg'>{exp.company} · {exp.type}</p>
                            </div>
                            <div className='text-right mt-2 lg:mt-0'>
                                <p className='font-body text-sm'>
                                    {new Date(exp.start).toLocaleString('default', { month: 'short', year: 'numeric' })} - {exp.end ? new Date(exp.end).toLocaleString('default', { month: 'short', year: 'numeric' }) : 'Present'} · {getDurationString(exp.start, exp.end)}
                                </p>
                                <p className='font-body text-sm'>{exp.location}{exp.mode ? ` · ${exp.mode}` : ''}</p>
                            </div>
                        </motion.div>
                        {exp.platforms && (
                            <motion.div variants={item} className='mb-6'>
                                <h3 className='font-display text-lg mb-2'>Platforms & Skills:</h3>
                                <p className='font-body text-sm leading-relaxed'>
                                    {exp.platforms}
                                </p>
                            </motion.div>
                        )}
                        <motion.div variants={item}>
                            <h3 className='font-display text-lg mb-3'>Key Responsibilities:</h3>
                            <ul className='font-body text-sm space-y-2 leading-relaxed'>
                                {exp.responsibilities.map((r, i) => <li key={i}>• {r}</li>)}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience 