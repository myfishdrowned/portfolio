import React from "react";

const Nav = () => {
    return (
        <div className=''>
            <ul className='flex m-auto justify-end absolute inset-x-0 top-0 text-white font-thin w-full h-16'>
                <li >Logo</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav