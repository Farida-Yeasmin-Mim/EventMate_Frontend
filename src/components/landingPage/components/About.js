import React from 'react';

function About(props) {
    return (
      <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p>EventMate makes sure that the event proceeds smoothly. Our platform will assist the organizer in finding the best services within their price range.</p>
            <button> {props.button} </button>
        </div>

      </div>
    );
  }
  
  export default About;