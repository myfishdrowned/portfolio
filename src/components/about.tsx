import React from 'react'

const About = () => {
    return (
        <div className ="flex flex-col items-center bg-bg-blue text-white h-screen w-full">

            <div className='w-1/2'>
                <h1 className='font-display text-4xl'>About Me</h1>
                <p className='font-body'>I'm a self-taught Front-end developer based in Phoenix, Arizona 
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona
                I'm a self-taught Front-end developer based in Phoenix, Arizona</p>
            </div>

            <div className='flex'>
                <div>
                    <h2>Technologies</h2>
                    <ul className='border'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Gatsby</li>
                        <li>Tailwind CSS</li>
                        <li>Sass</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h2>Tools</h2>
                    <ul className='border'>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h2>Misc</h2>
                    <ul className='border'>
                        <li>Git</li>
                        <li>VS Code</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About