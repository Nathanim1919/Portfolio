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

function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  return (
    <>
    <HeroStyle >
        <div className='hero-text' data-aos="fade-right">
          <h3>Hello, i'm</h3>
            <h1>Nathanim<br/>Tadele</h1>
            <p>Experianced <span>Software Engineer </span>from Addis ababa, Ethiopia</p>
            <div className='social'>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <AiFillGithub/>
            </div>
            <div>
              <button>Hire me</button>
              <button className='downloadCV'>CV here</button>
            </div>
        </div>
        <div className='Image'>
          <div data-aos="zoom-in" className='circle'>
            <div className='react'>
              <FaReact/>
            </div>
            <div className='node'>
              <FaNodeJs/>
            </div>
            <div className='python'>
              <FaPython/>
            </div>
          </div>
          <div data-aos="fade-up">
            <img src={MyImage} alt=''/>
          </div>
        </div>
    </HeroStyle>
    </>
  )
}

export default Hero