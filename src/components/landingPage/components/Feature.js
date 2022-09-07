import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_4.jpg';
import featureimage1 from '../images/feature_5.jpg';
import featureimage2 from '../images/feature_6.jpg';
import featureimage3 from '../images/feature_8.png';



function Feature() {
    return (
      <div id='features'>
        <div className='a-container'>
        <FeatureBox image={featureimage} title='Multiple Events at a Time' />
        <FeatureBox image={featureimage1} title='Time Management' />
        <FeatureBox image={featureimage2} title='Organized Planning System' />
        <FeatureBox image={featureimage3} title='Filter and Choose Vendor' />
        </div>
        
      </div>
      
    );
  }
  
  export default Feature;