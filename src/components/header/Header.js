import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../img/Modern Sys_CoLogo.png'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'

function Header() {
  const [navbars, setNavbar] = useState(true);
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const handleClose = () => {
    setClick(false)
  }

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
        <ul className={`nav-links ${click ? 'active' : ''}`}>
          <li className="upward"><Link to='/about' onClick={handleClose}>Олимпиадын тухай</Link></li>
          <li className="upward"><Link to='/sponsor' onClick={handleClose}>Ивээн тэтгэгч</Link></li>
          <li className="upward"><Link to='reward' onClick={handleClose}>Шагнал</Link></li>
          <li className="upward"><Link to='/faq' onClick={handleClose}>FAQ</Link></li>
          <li className="upward"><Link to='/form' onClick={handleClose}>Бүртгүүлэх</Link></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? <CloseOutlined className='icon' /> : <MenuOutlined className='icon' /> }
        </div>
      </div>
  )
}

export default Header;