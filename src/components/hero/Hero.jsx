import React,{useEffect} from 'react'
import MyImage from '../../assets/me.png'
import { HeroStyle } from './heroStyle'
import {
  FaNodeJs,
  FaReact,
  FaPython
} from 'react-icons/fa'

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  
  return (
    <>
    <HeroStyle id='hero'>
        <div className='hero-text' data-aos="fade-right">
          <h3>Hello, I'm Nathanim T.</h3>
            <h1> a Full-Stack Software<br/>Developer.</h1>
            <div className='social'>
                <NavLink  to = {
                  'https://www.instagram.com/na_tha_n_19/'
                } target='_blank'>
                <AiFillInstagram/>
                </NavLink>
                <NavLink to = {
                  'https://www.linkedin.com/in/nathanim-tadele-762099247/'
                } target='_blank' >
                <AiFillLinkedin/>
                </NavLink>
                <NavLink to = {
                  'https://github.com/Nathanim1919/'
                } target='_blank' >
                <AiFillGithub/>
                </NavLink>
            </div>
           
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Let's Talk.</Link>
        </div>
        <div className='Image' data-aos="fade-left">
          <div>
            <div className='react'>
              <FaReact/>
            </div>
            <div className='node'>
              <FaNodeJs/>
            </div>
            <div className='python'>
              <FaPython/>
            </div>
            <img src={MyImage} alt=''/>
          </div>
        </div>
    </HeroStyle>
    </>
  )
}

export default Hero;