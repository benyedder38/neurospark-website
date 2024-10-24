import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        {/* <video src="videos/video-1.mp4" autoplay loop muted  /> */}
        <h1>EFFICIENT ELECTRICAL SOLUTIONS</h1>
        <p>Fast and reliable no nonsense</p>
        <div className="hero-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET IN TOUCH
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Watch trailer <i className='far fa-play-circle' />
          </Button>
        </div>
      </div >
    </div>
  )
}

export default HeroSection