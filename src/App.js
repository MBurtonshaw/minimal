import './App.css';
import { useState } from 'react';
import Hello from './Components/Hello';

function App() {
  if (1===1) {
    return(
      <div className='App container-fluid bg-light'>
          <div className='px-3 py-4'>
            <button id='btn-div' className='px-3'>click</button>
          </div>
          <Hello />
      </div>
    );
  }
  if (1===2) {
    return(
      <div className='App container-fluid bg-dark'>
          <div className='px-3 py-4'>
            <button id='btn-div' className='bg-dark text-white border-white px-3'>click</button>
          </div>
          <Hello />
      </div>
    );
  }
}

export default App;
