import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../img/Modern Sys_CoLogo.png'

function Header() {
  return (
       <div className='header'>
        <img src={logo} width={90} height={90} alt='syscotech'/>
        <ul class="nav-links">
          <li class="upward"><a href="/">Dashboard</a></li>
          <li class="upward"><Link to='/'>Portfolio</Link></li>
          <li class="upward"><a href="/">Services</a></li>
          <li class="upward"><Link to='/mainformsecond'>olympad burtguuleh</Link></li>
        </ul>
      </div>
  )
}

export default Header