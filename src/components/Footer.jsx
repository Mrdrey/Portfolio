import React from 'react'
import FacebookImage from '../assets/facebook.png'
import InstagramImage from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import './css/Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="Heading">
        
            <h1>Andre Brizuela</h1>
            <p>Truth is a deep Kindness that teaches us to be content in our everyday life and share with the people the same happiness.</p>
            <div className="soc-med">
                <a href="https://www.facebook.com/dreyyyy12uwu" target='_blank'><img src={FacebookImage} alt="Facebook" /></a>
                <a href="https://www.instagram.com/dreytut/" target='_blank'><img src={InstagramImage} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/brizuelaandre/" target='_blank'><img src={Linkedin} alt="Linkedin" /></a>
            </div>
            <div className='copyRight'>
                    &copy; 2025 Andre Brizuela.All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer