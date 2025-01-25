import React from 'react'
import './css/About.css'
const About = () => {

  return (
    <div className="about-container">
      {/* title container */}
      <div className="About-title">
        <h1>About</h1>
      </div>
      <div className="overview">
        
      <div className="phrase">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere alias recusandae ad suscipit tenetur laborum fuga officiis. Temporibus odio quo doloremque quaerat ducimus! Pariatur voluptates beatae nulla modi sed! Tenetur quo repudiandae cum amet laborum! Rerum repellat nulla culpa perspiciatis sed excepturi quae distinctio iure rem corporis? Temporibus recusandae consequuntur molestiae ut provident officiis dolores. Unde, magni quidem. Enim illo vel quas minus tempora unde libero praesentium? Quasi, officiis aliquam. A nemo, corrupti, perferendis minus officia illo ut suscipit porro itaque totam, voluptas nihil quod eius soluta! Nesciunt fuga minima, ex repellendus hic esse magni aperiam adipisci dolores earum quam nihil cumque, nemo corrupti omnis eos sit. Rem quasi, ullam facilis accusamus maiores pariatur facere ad soluta odit consectetur ab.
      </p>
      </div>
      </div>

      {/* skills bar */}
      <div className="skills-container">
        <h2>Technical Stack</h2>
      <p>JavaScript</p>
      <div className="container-skill-bar">
        <div className="skills js">65%</div>
      </div>

     

      <p>C#</p>
      <div className="container-skill-bar">
        <div className="skills csharp">40%</div>
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