import React from 'react'
import './css/About.css'
import image from '../assets/csharp.png'
import nodejs from '../assets/node.png'


const About = () => {

  return (
    <div className="about-container">
      {/* title container */}
      <div className="About-title">
        <h1>About</h1>
      </div>
      <div className="overview">
        <h3 >Overview</h3>
      <div className="phrase">
      <p>
      I am a motivated and passionate individual committed to continuous learning and self-improvement. With a solid foundation in Web and Mobile Development, I have cultivated skills that reflect my adaptability, perseverance, and proactive approach to challenges throughout my academic journey. Beyond technical expertise, I am driven by a deep curiosity for innovation and a commitment to solving real-world problems through technology.  I am eager to apply my knowledge and grow further as I step into professional opportunities in the tech industry. </p> 
      </div>
      </div>

      {/* skills bar */}
      <div className="skills-container">
        <h2>Technical Stack</h2>

      </div>
     
      <div className="other-skills">
        
       
              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="html" />
             
              </div>


              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="css" />
             
              </div>

              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="javascript" />
           
              </div>
              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="javascript" />
           
              </div>

              <div className='skill-container'>
              <img src={image} alt="csharp" style={{width:90}}/>
            
              </div>


              <div className='skill-container'>
              <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="mongodb" style={{width:135}}/>
           
              </div>
              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000" alt="mongodb"/>
              
              </div>
              <div className='skill-container'>
              <img src={nodejs} alt="nodejs" style={{width:100,paddingTop:25}}/>
             
              </div>
              <div className='skill-container'>
              <img src="https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000" alt="mongodb"/>
              
              </div>


      </div>
    </div>
  )
}

export default About