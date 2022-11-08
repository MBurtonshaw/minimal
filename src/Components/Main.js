import { useState, useEffect } from 'react';
import Hello from './Hello';
import One from './One';

export default function Main() {

  /* FUNCTIONS DEALING WITH LIGHT/DARK MODE */
  const [ time_of_day, setTime_of_day ] = useState('');

  function setClock() {
      setTime_of_day('light');
  }

  function rewindClock() {
    if ( time_of_day === 'light' ) {
      setTime_of_day('dark');
    } else if ( time_of_day === 'dark' ) {
      setTime_of_day('light');
    }
  }

  useEffect( () => { setClock() }, [ setTime_of_day ] );

  /* RETURN STATEMENT */

  if (time_of_day === 'light') {

    return(
      <div className='App container-fluid bg-light'>
        
          <div className='px-3 py-4'><button className='px-3 bg-dark border-white text-white'
              onClick={
                ()=>{ rewindClock() }}> dark </button>
          </div>

          <Hello time={ time_of_day }/>
          <One time={ time_of_day } />

      </div>
    );
  }

  if (time_of_day === 'dark') {
    return(
      <div className='App container-fluid bg-dark'>

          <div className='px-3 py-4'><button className='px-3 bg-light border-black text-black'
              onClick={
                ()=>{ rewindClock() }}> light </button>
          </div>
          
          <Hello time={ time_of_day }/>
          <One time={ time_of_day } />
          
      </div>
    );
  }
}

