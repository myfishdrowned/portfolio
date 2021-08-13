import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

function ProjectCard(prop) {
    let tags = prop.tags.map(tag => 
        <li className='border rounded-lg bg-black text-white p-1'>{tag}</li>
    )
    return (
        <div className='font-body h-full w-full'>
                <p className='text-3xl'>{prop.name}</p>
                <p>{prop.description}</p>
                <ul className='flex space-x-2'>{tags}</ul>
                <div className='flex space-x-4'>
                    <button className='border-2 p-1'><a href={prop.liveDemo}>Live Demo</a></button>
                    <button className='border-2 p-1'><a href={prop.github}>Check out the Code</a></button>
            </div>
        </div>
    )
}

export default ProjectCard