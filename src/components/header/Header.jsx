import React, { useState } from 'react';
import {
  FaCode
} from 'react-icons/fa';
import {
  AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai';
import styled from 'styled-components';
import {Link} from 'react-scroll';

function Header() {
  const [opennav, setOpenNav] = useState(false);

  return (
    <>
      <HeaderStyle opennav={opennav}>
        <div className="logo">
          <h3>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {" "}
              <FaCode />
            </Link>
          </h3>
          <div className="navIcon" onClick={() => setOpenNav(!opennav)}>
            {opennav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <Link
                onClick={() => setOpenNav(false)}
                to="service"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenNav(false)}
                to="works"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenNav(false)}
                to="about_me"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenNav(false)}
                to="blog"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenNav(false)}
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Contact
              </Link>
            </li>
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
    z-index: 16;
    backdrop-filter: blur(5px);
    color: #fff;
    > * {
      cursor: pointer;
      outline: none;
    }
  }

  > div:nth-child(2) {
    background-color:${props => (props.opennav ? '#fff' : 'transparent')};;
    position: fixed;
    padding: 4rem 0rem;
    top: ${props => (props.opennav ? '0' : '-100rem')};
    left: 0;
    right: 0;
    z-index: 10;
    transition: all .3s ease-in-out;
      background-color:#000;
      color:#fff;
    ul {
      /* align-self: center; */
      display: flex;
      flex-direction: column;
      list-style-type: none;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;

      li {
        text-align: left;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 1rem .5rem;
        color: #eee;

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

     .logo{
       backdrop-filter: blur(0px);
     }
     
     .navIcon{
      display: none;
      outline: none;
     }

       > div:nth-child(2) {
          position: relative;
          padding: 0 1rem;
          top:0;
          background-color:transparent;
    ul {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}
       }
      }
`;
