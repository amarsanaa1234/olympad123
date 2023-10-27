import React from 'react';
import './pay.css';
import qr from '../../../img/qr.png';


function Pay() {
  return (
    <div className='pay'>
      <div className="payment">
        <div className='creditHeader'>
          <h1>Банкны QR </h1>
          <img src={qr} alt="credit logo" width={250} height={250}/>
        </div>
        
        <div className='creditTools'>
        <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' alt='visa card' height='80' class='credit-card-image' id='credit-card-image'/>
        <form action="">
          Банк
            <input class='input-field' type="text" disabled="disabled" value='Хаан банк'></input>
            Дансны дугаар
            <input class='input-field' type="text" disabled="disabled" value='5720171459'></input>
            <td className='input-field2'>
              ДАНСНЫ НЭР
              <input class='input-field1' type="text" disabled="disabled" value='Амарсанаа'></input>
            </td>
            <table class='half-input-table'>
              <tr>
                <td>ДАНСНЫ НЭР
                  <input class='input-field' type="text" disabled="disabled" value='Амарсанаа'></input>
                </td>
                <td>ГҮЙЛГЭЭНИЙ ДҮН
                  <input class='input-field' type="text" disabled="disabled" value='5,000₮'></input>
                </td>
              </tr>
            </table>
            ГҮЙЛГЭЭНИЙ УТГА
            <input class='input-field' type="text" disabled="disabled" value='өөрийн нэр, утасны дугаар'></input>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Pay
