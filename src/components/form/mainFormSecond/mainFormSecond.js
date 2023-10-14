import React from 'react'
import './mainFormSecond.css'
import { Link } from 'react-router-dom'
import {db} from '../../../firebase-config';

const MainFormSecond = () => {

  return (
    <>  
      <div class="contentSection">
          <ul class="nav-links">
              <li class="upward"><Link href="/">butsah</Link></li>
          </ul>
          <div class="infoSection">
            <form action="/action_page.php" class='form'>
              <label id='label' for="fname">dugaar</label>
              <input type="text" id="fname" name="fname" />
              <label id='label' for="fname">course</label>
              <input type="text" id="fname" name="fname"/>
              <label id='label' for="fname">gmail</label>
              <input type="text" id="fname" name="fname"/>
              <label id='label' for="fname">angi</label>
              <input type="text" id="fname" name="fname"/>
              <label id='label' for="fname">dugaar</label>
              <input type="text" id="fname" name="fname" />
              <label id='label' for="fname">course</label>
              <input type="text" id="fname" name="fname"/>
              <label id='label' for="fname">gmail</label>
              <input type="text" id="fname" name="fname"/>
              <label id='label' for="fname">angi</label>
              <input type="text" id="fname" name="fname"/>
              <Link to='/form'>
              <button class="btn">butsah</button>
              </Link>
              </form>
            </div>
      </div>
    </>
  )
}

export default MainFormSecond