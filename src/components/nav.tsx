import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
    return (
        <div className=''>
            <ul className='flex m-auto justify-end absolute inset-x-0 top-0 text-white font-thin w-full h-16'>
                <li><StaticImage className='w-14 border-2' src='../images/profile.svg' alt='Logo'/>Logo</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav