import React from 'react'
import './title.css'
import Timer from '../timer/timer'

function Title() {
  return (
    <>
    <div className='titleback'>
      <div className="banner-content-box">
        <div className="large-h1-span mobile-sizing">
          Sys&Cotech
          <br/>
          Olympad
        </div>
        <div className='banner-content-litleBox'>
            <h1>Website Design Studio</h1>
          <h2>
            We are a one-stop shop for amazing websites, graphics and digital marketing services.
          </h2>
        </div>
      </div>
    </div>
    <Timer/>
    </>
  )
}

export default Title
