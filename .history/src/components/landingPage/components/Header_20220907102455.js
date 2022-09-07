import React from 'react';
import Navbar from './Navbar';


function Header(props) {
  return (
    <div id='main'>
      {/* <Navbar/> */}
      <div className='name'>
        <h1><span>A Partner </span>To Design Your Day</h1>
        <p className='details' >EventMate is a platform to provide a package solution to an event organizer.
          He/she will be able to hire/buy the best products/services for the event.</p><br></br>
        <a href='#' className='cv-btn'>Download</a>
      </div>

    </div>
  );
}

export default Header;