import React from 'react';
import About from './components/About';
import Feature from './components/Feature';
import Header from './components/Header';
import './LandingPage.css';
import aboutimage from './images/frame.jpg';
import aboutimage1 from './images/download3.png';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

function LandingPage(props) {
  return (
    <div>
      <Header />
      <Feature />
      <About image={aboutimage} title='EventMate Comes With All You Need To Organize An Event' button='Get The App' />
      <Presentation />
      <About image={aboutimage1} title='Download And Get The App Now' button='Download' />
      <Contact />
    </div>
  );
}

export default LandingPage;