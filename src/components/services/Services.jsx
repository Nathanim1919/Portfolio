
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
    <div data-aos="fade-up">
        <div>
            <SiSimilarweb />
        </div>
        <h2>Front-end Development</h2>
        <p>I specialize in crafting engaging and visually appealing user interfaces for websites, ensuring a seamless and interactive experience for your audience. Technologies: ReactJS, Redux.</p>
    </div>

    <div data-aos="fade-up">
        <div>
            <AiFillRobot />
        </div>
        <h2>Back-end Development</h2>
        <p>With a focus on server-side logic and database management, I excel in building robust and scalable back-end systems to power your web applications. Technologies: Node.js, MongoDB, SQLDB, Django, Flask.</p>
    </div>

    <div data-aos="fade-up">
        <div>
            <AiFillApple />
        </div>
        <h2>App Development</h2>
        <p>I have extensive experience in designing and developing mobile applications that deliver seamless experiences on various platforms. Technologies: React Native.</p>
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
        position: relative;

        >*{
            position: relative;
            z-index: 3;
        }

        &::after{
            position: absolute;
            bottom: 1rem;
            right: 0;
            width: 50%;
            height: 4rem;
            border-radius: 50%;
            background-color: #eee;
            content: '';
            transform: rotate(-20deg);
        }

          @media screen and (max-width:768px){
                width: 90%;

                 &::after{
                    position: absolute;
                    bottom: 1rem;
                    right: 0;
                    width: 80%;
                    height: 4rem;
                    border-radius: 50%;
                    background-color: #eee;
                    content: '';
                    transform: rotate(-20deg);
        }
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
       grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
       gap: 1rem;
       width: 75%;
       margin:3rem auto;
       position: relative;
       padding: 3rem;

       &::after{
          content: '';
          background-color:#eee;
          width: 40%;
          height: 60%;
          position: absolute;
          bottom: -3rem;
          border-bottom-right-radius: 30px;
       }

       &::before{
          content: '';
          background-color:#eee;
          width: 40%;
          height: 60%;
          position: absolute;
          bottom: -3rem;
          right: 0;
          border-bottom-left-radius: 30px;
       }

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
        z-index: 3;
        overflow: hidden;
        border:1px solid #eee;
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
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        &::after{
            position: absolute;
            top: 0;
            left: 0;
            width: 27%;
            height: 30%;
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
            font-size: .8rem;
        }
       }
        
    }

    @media screen and (max-width: 768px) {

        .services{
            &::after{
            width: 40%;
            height: 10%;
            bottom: 0rem;
         }
         
         &::before{
           content: '';
            height: 10%;
            position: absolute;
            top: 0rem;
         }
        }
    }
`