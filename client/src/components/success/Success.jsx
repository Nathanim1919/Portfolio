import React,{useEffect} from 'react'
import styled from 'styled-components'
import {
    MdOutlineDoneOutline
} from 'react-icons/md';

import {
    AiOutlineCloseCircle
} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Success({sendMsg, success,setSucces, setSendMsg}) {
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, [])

    const closeMsg =()=>{
        setSucces(false);
        setSendMsg(false)
    }

    if (sendMsg || success){
        return (
          <SuccessHeader>
              {!success && <div data-aos="zoom-in" className='Loader'>
                  <h1>Loading...</h1>
              </div>}
             {success && <div data-aos="zoom-in" className='successMsg'>
                  <div onClick={closeMsg} className='close-icon'>
                    < AiOutlineCloseCircle/>
                  </div>
                  <div className='icon'>
                      < MdOutlineDoneOutline/>
                  </div>
                 <div className='text'>
                    <h2>Message Received</h2>
                    <p>Thank you for getting in touch. I've received your message and will respond to you as soon as possible.</p>
                </div>

              </div>}
          </SuccessHeader>
        )
    }
}

export default Success;



const SuccessHeader = styled.div`
    background-color: rgba(255,255,255,.3);
    backdrop-filter: blur(6px);
    display: grid;
    place-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    z-index: 10;

    
    .successMsg{
        display: grid;
        grid-template-columns: .1fr .7fr;
        align-items: center;
        background-color: #89D57D;
        padding: 1rem;
        gap: 1rem;
        border-radius: 10px;
        box-shadow: 0 7px 23px rgba(0,0,0,.073);
        position: relative;
         width: 40vw;

        @media screen and (max-width:700px){
            width: 80vw;
        }

        .close-icon{
            color: #fff;
            font-size: 1.2rem;
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;

            &:hover{
                color: red;

            }
        }

        >div.icon{
            width: 60px;
            height: 60px;
            border-radius:50%;
            background-color: green;
            font-size: 2rem;
            color: #fff;
            display: grid;
            place-items: center;
            box-shadow: 0 7px 23px rgba(0,0,0,.3);
        }

        >div.text{
            display: flex;
            flex-direction: column;

            >*{
                margin: 0;
            }
        }
    }
`