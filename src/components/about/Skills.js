import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

// Add this style block for the skill-icon class
const style = `
.skill-icon {
  width: 48px;
  height: 48px;
  display: block;
}
`;

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
        <>
            <style>{style}</style>
            <div ref={ref} data-scroll-section className='flex flex-col max-w-6xl space-y-12 lg:space-y-24  w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4'>
                <div className='flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 w-full text-center lg:text-left m-auto'>
                    <motion.h1 initial='hidden' animate={animation} variants={header} className='font-display text-4xl lg:w-1/4'>
                        Skills
                    </motion.h1>
                    <motion.p initial='hidden' animate={animation} variants={header} className='font-body lg:text-lg leading-loose lg:leading-loose lg:w-3/4'>
                        Technical expertise in Identity and Access Management platforms, development languages, and enterprise security tools.
                    </motion.p>
                </div>

                <div className='flex flex-col w-full text-center space-y-24 lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 lg:divide-x divide-opacity-30 divide-graphite text-center justify-between'>
                    <motion.div className='w-full lg:w-1/2'           
                        initial='hidden'
                        animate={animation}
                        variants={header}>
                        <motion.h2 variants={header} className='font-display text-lg'>IAM Platforms</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                            {/* SailPoint skill styled like the sample: icon above, text below, centered, no background circle */}
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/sailpoint.png" alt="SailPoint" className="skill-icon mb-2" />
                                <span>SailPoint</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/identitynow.png" alt="IdentityNOW" className="skill-icon mb-2" />
                                <span>IdentityNOW</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/identityiq.png" alt="IdentityIQ" className="skill-icon mb-2" />
                                <span>IdentityIQ</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/okta.png" alt="Okta" className="skill-icon mb-2" />
                                <span>Okta</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/secretserver.png" alt="Secret Server" className="skill-icon mb-2" style={{width: '56px', height: '56px'}} />
                                <span>Secret Server</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/servicenow.png" alt="ServiceNOW" className="skill-icon mb-2" />
                                <span>ServiceNOW</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/aws.png" alt="AWS" className="skill-icon mb-2" />
                                <span>AWS</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/jira.png" alt="JIRA" className="skill-icon mb-2" />
                                <span>JIRA</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/activedirectory.png" alt="Active Directory" className="skill-icon mb-2" />
                                <span>Active Directory</span>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div className='w-full lg:w-1/2'
                            initial='hidden'
                            animate={animation}
                            variants={header}>
                        <motion.h2 variants={header} className='font-display text-lg'>Development & Tools</motion.h2>
                        <motion.ul variants={header} className='grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14'>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/java.png" alt="Java" className="skill-icon mb-2" />
                                <span>Java</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/powershell.png" alt="PowerShell" className="skill-icon mb-2" />
                                <span>PowerShell</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/Postman.png" alt="Postman" className="skill-icon mb-2" />
                                <span>Postman</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/sql.png" alt="SQL" className="skill-icon mb-2" />
                                <span>SQL</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/beanshell.png" alt="Beanshell" className="skill-icon mb-2" />
                                <span>Beanshell</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/ldap.png" alt="LDAP" className="skill-icon mb-2" />
                                <span>LDAP</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/rbac.png" alt="RBAC" className="skill-icon mb-2" />
                                <span>RBAC</span>
                            </motion.li>
                            <motion.li variants={icons} className='flex flex-col items-center'>
                                <img src="/sso.png" alt="SSO" className="skill-icon mb-2" />
                                <span>SSO</span>
                            </motion.li>
                            <motion.li variants={icons} className='px-2 py-1 text-sm border bg-gray-300 bg-opacity-60 border-graphite border-opacity-20 rounded-full cursor-default transition transform duration-400 ease-in-out hover:scale-110'>JML Processes</motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Skills 