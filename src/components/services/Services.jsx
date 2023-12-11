
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
import {
    FaNodeJs,
    FaReact,
    FaPython,
    FaHtml5
} from 'react-icons/fa'
import {
    BiLogoFlask,
    BiLogoDjango,
    BiLogoMongodb,
} from 'react-icons/bi'
import {
    DiDjango,
    DiJavascript1
} from "react-icons/di";
import {
    BsDatabaseFillLock
} from "react-icons/bs";
import {
    SiMysql
} from "react-icons/si";
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
        <div className='tech'>
            <li><FaReact/></li>
            <li><DiJavascript1/></li>
            <li><FaHtml5 /></li>
        </div>
    </div>

    <div data-aos="zoom-in">
        <div>
            <AiFillRobot />
        </div>
        <h2>Back-end Development</h2>
        <p>With a focus on server-side logic and database management, I excel in building robust and scalable back-end systems to power your web applications. Technologies: Node.js, MongoDB, SQLDB, Django, Flask.</p>
          <div className='tech'>
            <li><FaNodeJs/></li>
            <li><DiDjango/></li>
            <li>< BiLogoFlask/></li>
        </div>
    </div>
   <div data-aos="zoom-in">
  <div>
    <BsDatabaseFillLock />
  </div>
  <h2>Database Expertise</h2>
  <p>With a focus on database design, management, and optimization, I excel in building robust and scalable back-end systems to power your web applications. Technologies: MongoDB, MySQL, SQL Server, Node.js, Django, Flask.</p>
  <div className='tech'>
    <li><BiLogoMongodb /></li>
    <li><SiMysql /></li>
  </div>
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
    width:100vw;

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
            margin:0;
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
       place-items: center;
       grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
       gap: 3rem;
       width: 80%;
       margin:3rem auto;
       position: relative;
       padding: 2rem;


       >div{
        display: flex;
        height:100%;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        box-shadow: 0 9px 20px rgba(0,0,0,.071);
        gap: .6rem;
        border-radius: 10px;
        background-color:rgba(255,255,255,.03);
        backdrop-filter: blur(20px);
        position: relative;
        z-index: 3;
        overflow: hidden;
        cursor: pointer;
        border:1px solid #333;
        text-align: left;

        .tech{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            >*{
                list-style-type: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: grid;
                color: gold;
                background-color: #333;
                place-items: center;
                font-size: 1.3rem;
            }
        }
        
        >*{
            position: relative;
            z-index: 5;
        }
        
        &:hover
        {
            border:1px solid orange;
            color:#fff;
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
            font-size: .9rem;
            text-align: left;
        }
       }
    }

    @media screen and (max-width: 768px) {

        >div.services{
            width: 90%;
            position: relative;
            left: -1.4rem;
            &::after{
            width: 40%;
            height: 10%;
            bottom: 0rem;
            gap:3rem;
            
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