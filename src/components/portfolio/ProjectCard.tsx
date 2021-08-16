import React from "react";

function ProjectCard(prop) {
    let tags = prop.tags.map(tag => 
        <li className='px-2 py-1 text-sm border border-graphite rounded-xl'>{tag}</li>
    )
    return (
        <div className='font-body h-full w-full'>
                <p className='font-display text-3xl'>{prop.name}</p>
                <ul className='flex space-x-2 m-auto justify-center'>{tags}</ul>
                <p>{prop.description}</p>
                <div className='flex space-x-4'>
                    <button className='border-2 p-1'><a href={prop.liveDemo}>Live Demo</a></button>
                    <button className='border-2 p-1'><a href={prop.github}>Check out the Code</a></button>
            </div>
        </div>
    )
}

export default ProjectCard