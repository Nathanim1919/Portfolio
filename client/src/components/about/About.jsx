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
    <AboutStyle data-aos = "fade-up" >
            <h1>About me</h1>
            <h2>Full stack software Developer<br/>Based in Addis Ababa, Ethiopia</h2>
            <p className='about'>I 'm a full-stack software developer with a passion for JavaScript and Python. My expertise spans front-end and back-end development, creating user-friendly interfaces, and building scalable server-side applications. 
                I thrive on solving complex problems, embrace continuous learning, and collaborate effectively in team environments. Let's connect and explore how we can work together on exciting projects.</p>
            <div className='skills'>
                <div>
                    <DiJavascript1/>
                </div>
                <div>
                    <FaReact/>
                </div>
                <div>
                    <FaNodeJs/>
                </div>
                <div>
                    < FaPython/>
                </div>
                <div>
                    <BiLogoFlask/>
                </div>
                <div>
                    <BiLogoDjango/>
                </div>
                <div>
                    <BiLogoMongodb/>
                </div>
                <div>
                    <DiMysql/>
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