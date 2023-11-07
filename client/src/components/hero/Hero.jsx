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
          <h3>Hello, I'm a</h3>
            <h1>Software<br/>Engineer.</h1>
            <div className='social'>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <AiFillGithub/>
            </div>
            <div>
              <button>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Hire me.</Link>
              </button>
            </div>
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

export default Hero