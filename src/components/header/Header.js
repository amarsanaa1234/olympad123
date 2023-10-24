import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../img/Modern Sys_CoLogo.png'

function Header() {
const [navbars, setNavbar] = useState(true);

const changeBackground = () => {
  if(window.scrollY >= 50) {
  setNavbar(true);
  }else{
  setNavbar(true);
  }
}

window.addEventListener('scroll', changeBackground);

  return (
       <div className={navbars ? 'header' : 'headerhide'}>
        <img src={logo} width={90} height={90} alt='syscotech'/>
        <ul class="nav-links">
          <li class="upward"><Link to="/">Олимпиадын тухай</Link></li>
          <li class="upward"><Link to='/'>Ивээн тэтгэгч</Link></li>
          <li class="upward"><Link to="/">Шагнал</Link></li>
          <li class="upward"><Link to="/">FAQ</Link></li>
          <li class="upward"><Link to='/form'>Бүртгүүлэх</Link></li>
        </ul>
      </div>
  )
}

export default Header;