import React from 'react';
import "./home.css";
import Slider from '../Silder/slider';
import {Navbar} from '../Navbar/navbar';
import Chatbot from './chatbot';

const CenteredImages = () => {
  return (           
    <div className='main'>
         <Navbar/>
      {/*<video src={farm2} autoPlay loop muted type="video/mp4"></video>*/}
      <div className="mt-n5"> 
        <Slider/>
        <Chatbot/>
      </div>
    </div>
  );
};

export default CenteredImages;


