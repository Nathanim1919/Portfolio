import React,{useEffect} from 'react';
import { WorksStyle } from './worksStyle';
import {
    AiFillGithub
} from 'react-icons/ai'
import project1Img from '../../assets/p1.jpeg'
import project2Img from '../../assets/p2.jpeg'
import project3Img from '../../assets/p3.jpeg'
import project4Img from '../../assets/p4.jpg'
import {
    FaNodeJs,
    FaReact,
    FaPython
} from 'react-icons/fa'

import {
    BiLogoMongodb,
    BiLogoCss3
} from 'react-icons/bi'

import {
    DiJavascript1,
    DiMysql
} from 'react-icons/di'

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
                <p>See All</p>
                <AiFillGithub/>
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
                    <div className='technologies i used'>
                        <FaReact/>
                        <FaNodeJs/>
                        <BiLogoMongodb/>
                    </div>
                    <div>
                        <button>Live Demo</button>
                        <button>Source code</button>
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
                    <div className='technologies i used'>
                        <FaReact/>
                        <FaNodeJs/>
                        <BiLogoMongodb/>
                    </div>
                    <div>
                        <button>Live Demo</button>
                        <button>Source code</button>
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
                    <div className='technologies i used'>
                        <FaReact/>
                    </div>
                    <div>
                        <button>Live Demo</button>
                        <button>Source code</button>
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
                    <div className='technologies i used'>
                       <BiLogoCss3/>
                       <DiJavascript1/>
                    </div>
                    <div>
                        <button>Live Demo</button>
                        <button>Source code</button>
                    </div>
                </div>
            </div>
        </div>
    </WorksStyle>
    </>
  )
}

export default Works