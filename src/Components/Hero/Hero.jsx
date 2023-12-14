import React from 'react'
import './Hero.css'
import hand_icon from '../Assest/hand_icon.png'
import arrow_icon from '../Assest/arrow.png'
import hero_image from '../Assest/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h2>NEWW ARRIVALS ONLY</h2>
         <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
         </div>
         <div className="herolatest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
         </div>
      </div>

      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero