import React from 'react'
import styled from 'styled-components'
import {
    MdOutlineDoneOutline
} from 'react-icons/md';

import {
    AiOutlineCloseCircle
} from 'react-icons/ai'

function Success({sendMsg, success,setSucces, setSendMsg}) {


    const closeMsg =()=>{
        setSucces(false);
        setSendMsg(false)
    }

    if (sendMsg || success){
        return (
          <SuccessHeader>
              {!success && <div className='Loader'>
                  <h1>Loading...</h1>
              </div>}
             {success && <div className='successMsg'>
                  <div onClick={closeMsg} className='close-icon'>
                    < AiOutlineCloseCircle/>
                  </div>
                  <div className='icon'>
                      < MdOutlineDoneOutline/>
                  </div>
                  <div className='text'>
                      <h2>Thank You</h2>
                      <p>I'll contact you back as soon as i can.</p>
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
        display: flex;
        align-items: center;
        background-color: #89D57D;
        padding: 1rem;
        gap: 1rem;
        border-radius: 10px;
        box-shadow: 0 7px 23px rgba(0,0,0,.073);
        position: relative;

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