import React,{useEffect} from 'react'
import { AboutStyle } from './aboutStyle'
import AboutImg from '../../assets/about.jpg'
import {
    FaNodeJs,
    FaReact,
    FaPython,
} from 'react-icons/fa'

import {
    BiLogoFlask,
    BiLogoDjango,
    BiLogoMongodb,
    BiLogoCss3
} from 'react-icons/bi'
import {
   DiJavascript1,
   DiMysql
} from 'react-icons/di'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
      Aos.init({
          duration: 1000
      })
  }, [])
  return (
    <>
    <AboutStyle>
        <div className='about-text'>
            <h1 data-aos="fade-up">About me</h1>
            <h2 data-aos="fade-up">Full stack software Developer<br/>Based in Addis Ababa, Ethiopia</h2>
            <p data-aos = "fade-up" > I 'm a full-stack software developer with a passion for JavaScript and Python. My expertise spans front-end and back-end development, creating user-friendly interfaces, and building scalable server-side applications. 
                I thrive on solving complex problems, embrace continuous learning, and collaborate effectively in team environments. Let's connect and explore how we can work together on exciting projects.</p>
            <div className='skills' data-aos="zoom-in">
                <div>
                    <span>JavaScript</span>
                    <DiJavascript1/></div>
                <div>
                    <span>react Js</span>
                    <FaReact/></div>
                <div>
                    <span>Node Js</span>
                    <FaNodeJs/></div>
                <div>
                    <span>Python</span>
                    < FaPython/></div>
                <div>
                    <span>Flask</span>
                    <BiLogoFlask/></div>
                <div>
                    <span>Django</span>
                    <BiLogoDjango/></div>
                <div>
                    <span>MongoDB</span>
                    <BiLogoMongodb/></div>
                <div>
                    <span>MySQL</span>
                    <DiMysql/></div>
            </div>    
        </div>
        <div className='cvBtn'>
        <button>CV here</button>
        </div>
    </AboutStyle>
    </>
  )
}

export default About