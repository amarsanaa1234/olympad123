import React from 'react';
import './pay.css';
import logo from '../../../img/Modern Sys_CoLogo.png';
import qr from '../../../img/qr.png';


function Pay() {
  return (
    <>
      <div className="payment">
        <div className='creditHeader'>
          <img src={qr} alt="credit logo" width={90} height={90}/>
          <img src={logo} alt="credit logo" width={90} height={90}/>
        </div>
        <div className='creditNumber'>
          <p>Дансны дугаар</p>
          <p>хаан банк</p>
          <h2>57 20 17 14 59</h2>
        </div>
        <div className='creditTools'>
          <div className='toolsTitle'>
            <p>Дансны нэр</p>
            <h3>Амарсанаа</h3>
          </div>
          <div className='toolsTitle'>
            <p>Гүйлгээний дүн</p>
            <h3>5000$</h3>
          </div>
          <div className='toolsTitle'>
            <p>Гүйлгээний утга</p>
            <h3>Овог нэр, дугаар</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pay
