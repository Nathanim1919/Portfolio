
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
    <div data-aos="zoom-in">
        <div>
            <SiSimilarweb />
        </div>
        <h2>Front-end Development</h2>
        <p>I specialize in crafting engaging and visually appealing user interfaces for websites, ensuring a seamless and interactive experience for your audience. Technologies: ReactJS, Redux.</p>
    </div>

    <div data-aos="zoom-in">
        <div>
            <AiFillRobot />
        </div>
        <h2>Back-end Development</h2>
        <p>With a focus on server-side logic and database management, I excel in building robust and scalable back-end systems to power your web applications. Technologies: Node.js, MongoDB, SQLDB, Django, Flask.</p>
    </div>

    <div data-aos="zoom-in">
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
    padding: 0rem 1rem;
    background-color:rgba(0,0,0,.4);
    position:relative;
    overflow:hidden;

     &::after{
          content: '';
          background-color:rgba(0,0,0,.2);
          width: 30rem;
          height: 30rem;
          position: absolute;
          top:6rem;
          transform:rotate(45deg);
          z-index:0;
       }

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: auto;
        position: relative;
        overflow:hidden;
        padding:2rem 0 0 0;

        >*{
            position: relative;
            z-index: 3;
        }

        &::after{
            position: absolute;
            top: -5rem;
            right: 0;
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            background-color: orange;
            content: '';

        }

          @media screen and (max-width:768px){
                width: 90%;
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
            color:#fff;
        }

        p{
            text-align: center;
            color: #eee;
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

      

       /* &::before{
          content: '';
          background-color:#eee;
          width: 40%;
          height: 60%;
          position: absolute;
          bottom: -3rem;
          right: 0;
          border-bottom-left-radius: 30px;
       } */

       >div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 9px 20px rgba(0,0,0,.061);
        gap: .6rem;
        border-radius: 10px;
        border-left: 10px solid #333;
        background-color:#2F2C3D;
        position: relative;
        z-index: 3;
        overflow: hidden;
        cursor: pointer;
        border:2px solid transparent;
        
        >*{
            position: relative;
            z-index: 5;
        }
        
        &:hover
        {
            border:2px solid orange;
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
            /* background-color: orange; */
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