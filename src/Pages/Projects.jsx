import React from 'react'
import CardProject from '../components/card'
import links from '../data/links'
import './css/Projects.css'

const Projects = () => {
  return (
   
    <div className="container-projects">
      <div className="title-projects">
        <h2>Projects</h2>
      </div>
     <div className="cards">
     {links.map((link, index) => (
        <CardProject key={index} title={link.title} text={link.text} link={link.link}  image={link.Image}/>
      ))}
     </div>
      
    </div>
  )
}

export default Projects
