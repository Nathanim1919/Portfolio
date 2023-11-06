
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
      <h3>Services</h3>
      <h1>What I Am Great At</h1>
      <p>I excel in building responsive websites, mobile apps, and implementing chatbots and AI automations for enhanced user experiences.</p>
    </div>  

     <div className='services'>
        <div data-aos = "fade-up" >
            <div>
                <SiSimilarweb/>
            </div>
            <h2>Web Development</h2>
            <p>I specialize in creating responsive and user-friendly websites that cater to your specific needs and objectives.</p>
        </div>
        <div data-aos = "fade-up" >
            <div>
                <AiFillApple/>
            </div>
            <h2>App Development</h2>
            <p>I have extensive experience in designing and developing mobile applications that deliver seamless experiences on various platforms.</p>
        </div>
        <div data-aos = "fade-up" >
            <div>
                <AiFillRobot/>
            </div>
            <h2>AI Automation</h2>
            <p>With a focus on AI and automation, I can optimize your business processes, enhance efficiency, and provide intelligent solutions.</p>
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

        h1{
            font-size: 2rem;
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

        >div{
            font-size: 2rem;

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