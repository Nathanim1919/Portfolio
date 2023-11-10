
import styled from 'styled-components'
import React, {useEffect} from 'react'
import {
    AiFillApple,
    AiFillRobot
} from 'react-icons/ai'

import {
    SiSimilarweb
} from 'react-icons/si'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {
  
useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, [])
    
  return (
    <ServiceStyle id='service'>
    <div className='header' data-aos="fade-up">
        <h3>Expertise</h3>
        <h2>My Areas of Specialization</h2>
        <p>I specialize in crafting engaging and visually appealing user interfaces for websites, ensuring a seamless and interactive experience for your audience.</p>
    </div>


     <div className='services'>
        <div data-aos = "fade-up" >
            <div>
                <SiSimilarweb/>
            </div>
            <h2>Front-end Development</h2>
            <p>I specialize in crafting engaging and visually appealing user interfaces for websites, ensuring a seamless and interactive experience for your audience.</p>
        </div>
        <div data-aos = "fade-up" >
            <div>
                <AiFillRobot/>
            </div>
            <h2>Back-end Development</h2>
             <p>With a focus on server-side logic and database management, I excel in building robust and scalable back-end systems to power your web applications.</p>
        </div>
        <div data-aos = "fade-up" >
            <div>
                <AiFillApple/>
            </div>
            <h2>App Development</h2>
            <p>I have extensive experience in designing and developing mobile applications that deliver seamless experiences on various platforms.</p>
        </div>
    </div>

    </ServiceStyle>
  );
}

export default Services;



const ServiceStyle = styled.div`
    display: grid;
    place-items: center;
    padding: 3rem 1rem;

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: auto;

          @media screen and (max-width:700px){
                width: 90%;
            }

        >*{
            margin: 0;
        }

        h3{
            font-size: .9rem;
            color: orange;
        }

        h2{
            font-size: 1.3rem;
        }

        p{
            text-align: center;
        }

    }
    .services{
        display: grid;
       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
       margin-top: 3rem;
       gap: 2rem;

       >div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 9px 20px rgba(0,0,0,.061);
        gap: .6rem;
        border-radius: 10px;
        border-left: 10px solid #333;
        background-color:#fff;
        position: relative;
        overflow: hidden;
        border:1px solid #333;
        cursor: pointer;

        >*{
            position: relative;
            z-index: 5;
        }

         &:hover
         {
            color:#fff;
         }

        &:hover::after{
            width: 100%;height: 100%;
            border-radius: 0;
        }

        &::after{
            position: absolute;
            top: 0;
            left: 0;
            width: 24%;
            height: 34%;
            background-color: #333;
            content: '';
            border-bottom-right-radius: 90%;
            transition: all .3s ease-in-out;
            transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        >div{
            font-size: 2rem;
            color: #fff;

        }

        >*{
            margin: 0;
        }
        h2{
            font-size: 1rem;
           position: relative;
           padding: 0.3rem;

           &::after{
            content: '';
            background-color: orange;
            position: absolute;
            bottom: 0;
            width: 20%;
            height: 5px;
            left: 0;
           }
        }

        p{
            color: #868382;
        }
       }
        
    }
`