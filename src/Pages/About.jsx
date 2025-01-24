import React from 'react'
import './css/About.css'
const About = () => {
  return (
    <div>
      {/* title container */}
      <div className="title">
        <h1>About</h1>
      </div>



      {/* skills bar */}
      <div className="skills-container">
      <p>JavaScript</p>
      <div className="container-skill-bar">
        <div className="skills js">65%</div>
      </div>

      <p>C#</p>
      <div className="container-skill-bar">
        <div className="skills php">60%</div>
      </div>
          <p>HTMl</p>
              <div className="container-skill-bar">
        <div className="skills html">90%</div>
      </div>

      <p>CSS</p>
      <div className="container-skill-bar">
        <div className="skills css">80%</div>
      </div>

      </div>
    </div>
  )
}

export default About