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
import ScreenImage from '../../assets/images/screen2.png'


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
                <p>I specialize in crafting engaging and visually appealing user interfaces for websites, ensuring a
                    seamless and interactive experience for your audience.</p>
            </div>

                <div data-aos="zoom-in" className='screenImage'>
                    {/* <img src={ScreenImage} alt=''/> */}
                </div>    

            <div className='services'>
            <div data-aos="zoom-in">
    <div>
        <SiSimilarweb/>
    </div>
    <h2>Front-end Enthusiast</h2>
    <p>My passion lies in sculpting captivating and immersive user interfaces that leave a lasting impression. With expertise in ReactJS and Redux, I'm dedicated to creating seamless and interactive experiences for your audience.</p>
</div>


                <div data-aos="zoom-in">
                <div>
                    <AiFillRobot/>
                </div>
                <h2>Backend Specialist @ALX Africa</h2>
                <p>Armed with expertise in various server-side technologies like Node.js, Spring Boot, and Flask, 
                    I've honed my skills at ALX Africa to craft robust and scalable backend systems. 
                    From server-side logic to database management, I thrive in building the backbone of web applications.
                     </p>
            </div>

            <div data-aos="zoom-in">
                <div>
                    <BsDatabaseFillLock/>
                </div>
                <h2>Master of Databases</h2>
                <p>Specializing in database design, management, and optimization, I craft resilient and scalable backend systems to drive your web applications forward. Proficient in MongoDB, MySQL, SQL, and Redis, I ensure your data infrastructure is both robust and efficient.</p>
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
    /* background-color: rgba(0, 0, 0, .4); */
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100%;
    position: relative;
    z-index: 20;


    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: auto;
        position: relative;
        overflow: hidden;
        padding: 2rem 0 0 0;

        > * {
            position: relative;
            z-index: 3;
            margin: 0;
        }

        &::after {
            position: absolute;
            top: -5rem;
            right: 0;
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            background-color: orange;
            content: '';

        }

        @media screen and (max-width: 768px) {
            width: 90%;
        }
    }

    > * {
        margin: 0;
    }

    h3 {
        font-size: 3rem;
        color: orange;
    }

    h2 {
        font-size: 4rem;
        color: #fff;
    }

    p {
        text-align: center;
        color: #eee;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 2rem;
        
        }

        h3 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        
        }

}

.services {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 3rem;
    width: 70%;
    margin: 3rem auto;
    position: relative;
    padding: 2rem;


    > div:nth-child(2) {
        position: relative;
        z-index: 5;
        transform: scale(1.2);
        transition: all .3s ease-in-out;
        @media screen and (max-width: 800px){
            transform: scale(1);
        }
    }

 


    > div {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        box-shadow: 0 19px 50px rgba(0, 0, 0, .071);
        gap: .6rem;
        border-radius: 10px;
        background: linear-gradient(90deg, #364b7b7d 0%, #18284856 100%);
        backdrop-filter: blur(20px);
        overflow: hidden;
        cursor: pointer;
        border: 1px solid #333;
        text-align: left;
        transition: all .3s ease-in-out;

        .tech {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            > * {
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

        > * {
            position: relative;
            z-index: 5;
        }

        &:hover {
            border: 1px solid orange;
            color: #fff;
        }


        > div {
            font-size: 2rem;
            color: #fff;

        }

        > * {
            margin: 0;
        }

        h2 {
            font-size: 2rem;
            position: relative;
            padding: 0.3rem;

            &::after {
                content: '';
                background-color: orange;
                position: absolute;
                bottom: 0;
                width: 20%;
                height: 5px;
                left: 0;
            }
        }

        p {
            color: #868382;
            font-size: 1.2rem;
            text-align: left;
        }
    }
}

@media screen and (max-width: 768px) {

    > div.services {
        width: 90%;
        position: relative;
        left: -1.4rem;

        &::after {
            width: 40%;
            height: 10%;
            bottom: 0rem;
            gap: 3rem;

        }

        &::before {
            content: '';
            height: 10%;
            position: absolute;
            top: 0rem;
        }
    }
}
`
