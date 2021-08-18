import React from "react";
import github from "../../images/github.svg"

function ProjectCard(prop) {
    let tags = prop.tags.map(tag => 
        <li 
            className='px-2 py-1 text-sm border bg-teal bg-opacity-20 border-graphite border-opacity-20 rounded-full cursor-default 
            transition transform duration-400 ease-in-out hover:bg-light-green hover:scale-110'>
            {tag}
        </li>
    )
    return (
        <div className='relative p-4 font-body flex-col space-y-4 justify-center h-full w-full'>
            <p className='tracking-wider text-3xl'>{prop.name}</p>
            <ul className='flex space-x-2 m-auto justify-center opacity-85'>{tags}</ul>
            <p className='text-lg w-11/12 m-auto leading-loose'>{prop.description}</p>
            <div className='absolute top-0 right-0 flex space-x-2'>
                <a href={prop.github} target='_blank'><img className='h-6 w-6' src={github} /></a>
                <button className='border border-light-green rounded-md p-1'><a href={prop.liveDemo}> Demo</a></button>
            </div>
        </div>
    )
}

export default ProjectCard