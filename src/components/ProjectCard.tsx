import React from "react";

function ProjectCard(prop) {
    return (
        <div className='font-display'>
            <p>{prop.name}</p>
            <img></img>
            <a href={prop.github}></a>
            <div className='flex space-x-4'>
                <button className='border-2'><a href={prop.liveDemo}>Live Demo</a></button>
                <button className='border-2'><a href={prop.github}>Check out the Code</a></button>
            </div>
        </div>
        // Screenshot
        // Live Demo
        // Github link
    )
}

export default ProjectCard