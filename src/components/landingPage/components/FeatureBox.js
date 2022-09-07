import React from 'react';

function FeatureBox(props) {
    return (
      <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p1>Eventmate will provide multiple events which are well organized within the scheduled time being in your budget.</p1>
        </div>
        
      </div>
    );
  }
  
  export default FeatureBox;