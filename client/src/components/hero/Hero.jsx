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

   const handleDownload = () => {
     // Define the path to your CV file
     const cvFilePath = './cv.pdf'; // Update the path accordingly

     // Create a temporary anchor element to trigger the download
     const link = document.createElement('a');
     link.href = cvFilePath;
     link.download = './cv.pdf'; // Set the desired download filename
     link.click();
   };
  return (
    <>
    <HeroStyle >
        <div className='hero-text' data-aos="fade-right">
          <h3>Hello, I'm a</h3>
            <h1>Software<br/>Engineer.</h1>
            <div className='social'>
                <AiFillInstagram/>
                <AiFillLinkedin/>
                <AiFillGithub/>
            </div>
            <div>
              <button onClick={handleDownload}>Hire me</button>
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