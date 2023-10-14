import './App.css';
import MainFormSecond from './components/form/mainFormSecond/mainFormSecond';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';

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
          <Route path='/mainformsecond' element={<MainFormSecond/>}/>
        </Routes>
    </section>
    
    </div>
    
  );
}

export default App;
