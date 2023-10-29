import React from 'react'
import './mentor.css'
import fibo from '../../img/fibo.png'
import nasha from '../../img/NashaTech_Logo-10.png'
import callpro from '../../img/callPro.png'


function Mentor() {
  return (
    <div className='mentors'>
        <section class="main-container">
            <div class="main">
                <div class="big-circle">
                    <div class="icon-block1">
                        <img src={fibo} alt="web design icon" />
                    </div>
                    <div class="icon-block">
                        <img src={nasha} alt="game design icon" />
                    </div>
                </div>
                <div class="center-logo">
                    <img src={callpro} alt="logo" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Mentor
