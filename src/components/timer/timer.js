import React, { useEffect, useRef, useState } from 'react'
import './time.css';

function Timer() {

    const [timer, setTimer] = useState("00:00:00")
    const Ref = useRef()

    function getTimeRemaining(e) {
      const total = Date.parse(e) - Date.parse(new Date());
      const hour = Math.floor(total / (1000 * 60 * 60) % 24);
      const seconds = Math.floor((total / 1000) % 60);
      const minute = Math.floor((total / 1000 / 60) % 60);
      return {
        total,
        hour,
        minute,
        seconds
      }; 
    }

    function startTimer(e){
      let {total, hour, minute, seconds} = getTimeRemaining(e);
      if(total >= 0){
        setTimer(
          (hour > 9 ? hour : '0' + hour) + ':' +
          (minute > 9 ? minute : '0' + minute) + ':' +
          (seconds > 9 ? seconds : '0' + seconds)
        )
      }
    }

    function clearTimer(e) {
        setTimer("00:00:10")
        if(Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
          startTimer(e)
        })
        Ref.current = id;
      }

    function getDeadTime(){
      let deadLine = new Date()
      deadLine.setSeconds(deadLine.getSeconds() + 10);
      return deadLine;
    }

    useEffect(() => {
      clearTimer(getDeadTime());
    }, []);

  return (
    <div className='timer-frame'>
      <div className='timer-frame-time'>
        <div className='timer-h1'>
            <h1 className='timer-h1-span'>"Dev Hackathon Student 2022"</h1>
            <h1 className='timer-h1-span'>бүртгэл хаагдахад</h1>            
        </div>
        <div className='time'>
            <h1>{timer}</h1>
        </div>
      </div>
      <div>
        <ul>
            <li>sad</li>
            <li>asda</li>
        </ul>
      </div>
    </div>
  )
}
export default Timer