import './App.css';
import MainForm from './components/form/mainForm/mainForm';
import Header from './components/header/Header';
import Pay from './components/form/pay/pay';
import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import Title from './components/homeTitle/title';
import Timer from './components/timer/timer';
import Mentor from './components/mentor/mentor';
import Footer from './components/footer/footer';
gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState(0);
  

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };
  const time = new Date();
  time.setSeconds(time.getSeconds() + 604800);

  return (
    <div className="AppContainer">
      <div className="Loading">
        <div className="follow"></div>
        <div
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></div>
        <div id="count" className="hide">
          {counter}%
        </div>
      </div>

      <div className="content">
        <div className='App'>
            <Header/>
            <Title/>
            <Timer expiryTimestamp={time}/>
            <MainForm/>
            <Pay/>
            <Mentor/>
            <Footer/>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
