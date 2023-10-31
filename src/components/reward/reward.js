import React, { useState } from 'react'
import './reward.css'
import Footer from "../footer/footer";

const Reward = () => {
  
  const [firstName, setFirstName] = useState("");
  
  
  return (
    <>
      <div className='reward'>
        <div className='reward-frame'>
            <h1 className='reward_h'>"Шагналын Сан"</h1>
              <div className='reward-text'>
                <div className='reward-text-st'>&#x2160; байр</div>
                <h3 className='reward-text-bg'>400'000₮</h3>
                <h5>Цом, Өргөмжлөл, Гарын бэлэг</h5>
              </div>
            <div className='reward-text2'>
              <div className='reward-text'>
                <div className='reward-text-st'>&#x2161; байр</div>
                <h3 className='reward-text-bg'>300'000₮</h3>
                <h5>Өргөмжлөл, Гарын бэлэг</h5>
              </div>
              <div className='reward-text'>
                <div className='reward-text-st'>&#x2162; байр</div>
                <h3 className='reward-text-bg'>200'000₮</h3>
                <h5>Өргөмжлөл, Гарын бэлэг</h5>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Reward;
