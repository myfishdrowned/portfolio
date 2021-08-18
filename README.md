<p align="center">
    <img alt="Icon" src="src/images/favicon.png" width="60" />
</p>

<h1 align="center">
  Personal Portfolio v1
  justincaovan.com
</h1>

##  Description
First iteration of my personal portfolio. This site was built with <a href='https://www.gatsbyjs.com/'>Gatsby</a>, styled with <a href='https://tailwindcss.com/'>TailwindCSS</a>, and deployed on <a href='https://www.netlify.com/'>Netlify</a>.


## Initial Thought Process/Project Goals
I wanted to use this project to not only display my projects and current skills as a frontend developer, but also to capitalize on the opportunity to implement new tools. During the planning process, I had general ideas of how I wanted the site to run and look but very little knowledge on how to build it. I knew I wanted:

* A fast, single page static website
* A standout hero page - possibly something interactive or animated
* Smooth, parrallax scrolling and scroll-based animations
* A minimal design with clean typography and a generous amount of white space

After much research, I chose to use Gatsby as my frontend framework because of how it precomputes all of the state in an application, resulting in fast web performance. I initially started off using Sass for styling but the found the development process to be slow so I switched to the utility classes of TailwindCSS. For smooth scrolling and scroll-based animations, I found Locomotive.js (smooth scrolling), Framer Motion (animation library for React), and react-intersection-observer proved to work best. 