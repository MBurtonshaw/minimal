import { React } from 'react';

export default function Hello(props) {
    if ( props.time === 'light' ) {
        return(
            <div className="container-fluid pb-5">
              <h1 className='text-center display-3'>hello</h1>
            </div>
        );
      }
      if ( props.time === 'dark' ) {
        return(
            <div className="container-fluid pb-5">
              <h1 className='text-center text-white display-3'>hello</h1>
            </div>
        );
      }
}
        
        