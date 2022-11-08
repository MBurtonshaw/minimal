import { React } from 'react';

export default function One(props) {
    if ( props.time === 'light' ) {
        return(
            <div className='container-fluid w-100'>
                <img className='img-fluid flashcard' src='../img/mountains-light.png' />
            </div>
        );
      }
      if ( props.time === 'dark' ) {
        return(
            <div className='container-fluid w-100'>
                <img className='img-fluid flashcard' src='../img/mountains-dark.png' />
            </div>
        );
      }
}
        
        