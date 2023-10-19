import './App.css';
import MainForm from './components/form/mainForm/mainForm';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Pay from './components/form/pay/pay';

function App() {

  return (
    <div className='App'>
    <section>
      <Header/>
      <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Routes>
          <Route path='/form' element={<MainForm/>}/>
          <Route path='/pay' element={<Pay/>}/>
        </Routes>
    </section>
    </div>
    
  );
}

export default App;
