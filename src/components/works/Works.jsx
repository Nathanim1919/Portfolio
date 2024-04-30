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
import AnimateImage from '../../assets/images/animate.gif'
import screenmage from '../../assets/images/screen3.png'

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
                    <h3>Project Hive</h3>
                    <p>Developed a project management web app with a clean, user-friendly interface, enabling users to create, assign, and track tasks, set deadlines, and monitor project progress.</p>
                    <p>Technologies used: MERN-stack</p>
                    <div className='technologies'>
                        <FaReact/>
                        <FaNodeJs/>
                        <BiLogoMongodb/>
                    </div>
                    <div>
                        <NavLink to={'https://projecthive.nathanim.me'} traget="_blank">Live Demo</NavLink>
                        <NavLink to={'https://github.com/Nathanim1919/Project-Hive'} traget="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-right">
                    <img src={project3Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-left">
                    <h2>E-learning Front-end Design</h2>
                    <h3>Online Education Platform</h3>
                    <p>Designed and developed a user-friendly e-learning platform with a modern, intuitive interface, enabling students to access courses, quizzes, and resources with ease.</p>
                    <p>Technologies used: React.js</p>
                    <div className='technologies'>
                        <FaReact/>
                    </div>
                    <div>
                        <NavLink to={"https://e-learn.nathanim.me"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://nathanim1919.github.io/E-learning/"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-left">
                    <img src={project4Img} alt=''/>
                </div>
                <div className='textContent' data-aos="fade-right">
                    <h2>Entertainment web app</h2>
                    <h3>Movie App</h3>
                    <p>Designed and developed a user-friendly movie app with an intuitive interface, enabling users to discover, browse, and explore movies with detailed information, ratings, and trailers.</p>
                    <p>Technologies used: CSS3, JavaScript</p>
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
                    <h2>F-vision - Financial Asistance</h2>
                    <h3>F-vsion is a personal financial assistance that i build as final project for my ALX foundation program</h3>
                    <p>Developed a personal financial assistant web app that helps users track their expenses, manage budgets, and set financial goals, with a clean, user-friendly interface and intuitive features.</p>
                    <p>Technologies used: MERN-stack, SO.io for realtime-notification</p>
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
                    <h2>A Landing Page For Smart-Flow</h2>
                    <h3>SmartFlow is an AI Automation Agency dedicated to enhancing business.</h3>
                    <p>Designed and developed a landing page for SmartFlow, an AI automation agency, with a sleek, modern design and engaging content to attract potential clients and showcase the company's services.
                    </p>
                    <p>Technologies used:Styled-component, React.js</p>
                    <div>
                        <NavLink to={"https://smartflow.nathanim.me"} target="_blank">Live Demo</NavLink>
                        <NavLink to={"https://github.com/Nathanim1919/"} target="_blank">Source code</NavLink>
                    </div>
                </div>
            </div>
        </div>
       <div className="experience-container">
        <div className='animationGif' data-aos="zoom-in">
            <img src={AnimateImage} alt=''/>
        </div>
        <div data-aos="fade-up">
            <h2>My Coding Journey</h2>
            <h1>My Junior Dev <span>Chronicles</span> 🚀</h1>
            <p>Embarking on my web development journey was like stepping into a coding wonderland. I vividly remember the thrill of riding the CSS Battle and Frontend Mentor rollercoaster, where every line of code became a brushstroke in the canvas of my pixel-perfect masterpieces! 🎨</p>
            
            <p>As a junior coder, my debugger was my trusty sidekick – a superhero training tool. Together, we conquered bugs, transformed errors into opportunities, and turned coding challenges into triumphs. Each keystroke felt like crafting my destiny as a web wizard!</p>
            <p>These are the <span>superpowers</span> that have shaped me into who I am today, alongside my unwavering consistency and belief in myself.</p>
            <ul>
                <li><NavLink to="https://www.alxafrica.com/programmes/" target="_blank" rel="noopener noreferrer"> < FaFire/>ALX Africa</NavLink> </li>
                <li><NavLink to="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer"> < FaFire/>The Odin Project</NavLink></li>
                <li><NavLink to="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer"> < FaFire/>Frontend Mentor</NavLink> </li>
                <li><NavLink to="https://cssbattle.dev/" target="_blank" rel="noopener noreferrer"> < FaFire/>CSS Battle</NavLink></li>
            </ul>
        </div>
      </div>
      <div className='footer'>
            <img src={screenmage} alt='screen'/>
            <div className='content' data-aos="zoom-in">
                <h2>Hey, fellow nerds! I'm craving a cup of coffee, so why not join me? Just give me a call, and let's make it happen!" ☕️</h2>
                <NavLink to='/contact'>Get in Touch</NavLink>
            </div>
      </div>
    </WorksStyle>
    </>
  )
}
export default Works;