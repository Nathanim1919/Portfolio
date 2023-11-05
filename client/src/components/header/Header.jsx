import React from 'react'
import { HeaderStyle } from './headerStyle'
import {
  FaCode
} from 'react-icons/fa'

function Header() {
  return (
    <>
    <HeaderStyle >
        <div className='logo'>
            <h3><FaCode/></h3>
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
  )
}

export default Header