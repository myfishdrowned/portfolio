import React from 'react'
import { about } from './about.module.scss'


const About = () => {
    return (
        <div className = {about}>
            <h1>About Me</h1>
            <p>I'm a self-taught Front-end developer based in Phoenix, Arizona</p>
            <h2>Tools</h2>
            <ul>
                <li></li>
            </ul>
            <h2>Technologies</h2>
            <ul>
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
            <h2>Misc</h2>
            <ul>
                <li>Git</li>
                <li>VS Code</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li></li>
            </ul>

        </div>
    )
}

export default About