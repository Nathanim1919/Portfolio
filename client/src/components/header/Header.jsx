import React, { useState } from 'react';
import {
  FaCode
} from 'react-icons/fa';
import {
  AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai';
import styled from 'styled-components';

function Header() {
  const [opennav, setOpenNav] = useState(false);

  return (
    <>
      <HeaderStyle opennav={opennav}>
        <div className='logo'>
          <h3><FaCode /></h3>
          <div className='navIcon' onClick={() => setOpenNav(!opennav)}>
            {opennav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>

        <div className='navigation'>
          <ul>
            <li>Service</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;



  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
    font-size: 1.4rem;
    position: relative;
    z-index: 20;
    > * {
      cursor: pointer;
    }
  }

  > div:nth-child(2) {
    background-color:${props => (props.opennav ? '#fff' : 'transparent')};;
    position: fixed;
    padding: 3rem 1rem;
    top: ${props => (props.opennav ? '0' : '-100rem')};
    left: 0;
    right: 0;
    z-index: 10;
    transition: all .3s ease-in-out;
    ul {
      align-self: center;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;

      li {
        text-align: left;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 1rem .5rem;

        &:hover{
          color: orange;
        }
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      padding:1rem 2rem;
      font-size: 1.4rem;
    }
  }


  @media(min-width: 768px){
     flex-direction: row;
     justify-content: space-around;
     
     .navIcon{
      display: none;
     }

       > div:nth-child(2) {
          position: relative;
          padding: 0 1rem;
          top:0;
    ul {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}
       }
      }
`;
