import React,{useEffect} from 'react';
import { WorksStyle } from './worksStyle';
import {
    AiFillGithub
} from 'react-icons/ai'
import project1Img from '../../assets/p1.jpeg'
import project2Img from '../../assets/p2.jpeg'
import project3Img from '../../assets/p3.jpeg'
import project4Img from '../../assets/p4.jpg'
import project5Img from '../../assets/p5.png'
import project6Img from '../../assets/p6.png'
import {
    FaNodeJs,
    FaReact,
    FaPython
} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {
    FaLaptopCode
} from "react-icons/fa6";

import {
    BiLogoMongodb,
    BiLogoCss3
} from 'react-icons/bi'

import {
    DiJavascript1,
    DiMysql
} from 'react-icons/di'
import {
    FaFire
} from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

function Works() {
    useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, [])
  return (
    <>
    <WorksStyle id='works'>
        <div className='header'>
            <h2>My Latest projects</h2>
            <div>
                <NavLink to='https://github.com/Nathanim1919/' target="_blank">See All
                 <AiFillGithub/>
                </NavLink>
            </div>
        </div>

        <div className='projects'>
            <div className='project'>
                <div className='image' data-aos="fade-right">
                    <img src={project1Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-left">
                    <h2>Social Media Web App</h2>
                    <p>Built a MERN stack social media app with essential features like real-time chat, post creation, story sharing, and interactive liking and commenting.</p>
                    <div className='technologies'>
                        <FaReact/>
                        <FaNodeJs/>
                        <BiLogoMongodb/>
                    </div>
                    <div>
                        <NavLink to={'https://github.com/Nathanim1919/social-media-backend'} target="_blank">Live Demo</NavLink>
                        <NavLink to={'https://github.com/Nathanim1919/social-media-frontend'} target="_blank"> Source code </NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-left">
                    <img src={project2Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-right">
                    <h2>Project Manegment Web App</h2>
                    <p>Developed a web-based project management application with robust chat functionality, project scheduling, and priority management for efficient collaboration and task organization.</p>
                    <div className='technologies'>
                        <FaReact/>
                        <FaNodeJs/>
                        <BiLogoMongodb/>
                    </div>
                    <div>
                        <NavLink to={'https://github.com/Nathanim1919/Project-Hive'} traget="_blank">Live Demo</NavLink>
                        <NavLink to={'https://projecthive.nathanim.me/'} traget="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-right">
                    <img src={project3Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-left">
                    <h2>E-learning Front-end Design</h2>
                    <p>Crafted a dynamic e-learning front-end using React, offering an engaging user interface for seamless online education with rich multimedia content and interactive features.</p>
                    <div className='technologies'>
                        <FaReact/>
                    </div>
                    <div>
                        <NavLink to={"https://nathanim1919.github.io/E-learning/"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://github.com/Nathanim1919/E-learning"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-left">
                    <img src={project4Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-right">
                    <h2>Entertainment web app</h2>
                    <p>Designed and developed a user-friendly movie app with an intuitive interface, enabling users to discover, browse, and explore movies with detailed information, ratings, and trailers.</p>
                    <div className='technologies'>
                       <BiLogoCss3/>
                       <DiJavascript1/>
                    </div>
                    <div>
                        <NavLink to={"https://github.com/Nathanim1919/movie-app"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://github.com/Nathanim1919/movie-app"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-left">
                    <img src={project5Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-right">
                    <h2>Entertainment web app</h2>
                    <p>Designed and developed a user-friendly movie app with an intuitive interface, enabling users to discover, browse, and explore movies with detailed information, ratings, and trailers.</p>
                    <div className='technologies'>
                       <BiLogoCss3/>
                       <DiJavascript1/>
                    </div>
                    <div>
                        <NavLink to={"https://landing.nathanim.me"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://github.com/Nathanim1919/"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-left">
                    <img src={project6Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-right">
                    <h2>Entertainment web app</h2>
                    <p>Designed and developed a user-friendly movie app with an intuitive interface, enabling users to discover, browse, and explore movies with detailed information, ratings, and trailers.</p>
                    <div className='technologies'>
                       <BiLogoCss3/>
                       <DiJavascript1/>
                    </div>
                    <div>
                        <NavLink to={"https://smartflow.nathanim.me"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://github.com/Nathanim1919/"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
        </div>
       <div class="experience-container">
            <h1>My Junior Dev <span>Chronicles</span> 🚀</h1>
            <p>Embarking on my web development journey was like stepping into a coding wonderland. I vividly remember the thrill of riding the CSS Battle and Frontend Mentor rollercoaster, where every line of code became a brushstroke in the canvas of my pixel-perfect masterpieces! 🎨</p>
            
            <p>As a junior coder, my debugger was my trusty sidekick – a superhero training tool. Together, we conquered bugs, transformed errors into opportunities, and turned coding challenges into triumphs. Each keystroke felt like crafting my destiny as a web wizard!</p>
            <p>These are the <span>Super Powers</span> that made me what I am now:</p>
            <ul>
                <li><NavLink to="https://www.alxafrica.com/programmes/" target="_blank" rel="noopener noreferrer"> < FaFire/>ALX Africa</NavLink> Completed the Full Stack Software Engineering Intensive Course and emerged as a coding superhero!</li>
                <li><NavLink to="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer"> < FaFire/>The Odin Project</NavLink> Conquered the full stack web development course like a mythical deity!</li>
                <li><NavLink to="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer"> < FaFire/>Frontend Mentor</NavLink> Where I honed my frontend skills and became a design maestro.</li>
                <li><NavLink to="https://cssbattle.dev/" target="_blank" rel="noopener noreferrer"> < FaFire/>CSS Battle</NavLink> The arena where I battled with CSS challenges and emerged victorious!</li>
            </ul>
      </div>
    </WorksStyle>
    </>
  )
}
export default Works;