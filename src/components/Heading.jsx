import React from 'react'
import '../components/css/Heading.css'
import myImage from '../assets/me.png'
const Heading = () => {
  return (
    <div>
        <div className="container">
        <div className="headline">
            <h1>Hi! <span>I'm Andre</span></h1>
            
            <p>A 4th Year student Computer Science student at Taguig City University, Aspiring Frontend Developer.</p>
            
        </div>
        <div className="image">
        <img src={myImage} alt="andreImage"  style={{width:730}}/>
        </div>
        </div>

    </div>
  )
}

export default Heading