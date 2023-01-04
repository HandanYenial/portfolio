import React from 'react';
import ProjectItem from '../components/ProjectItem';
import events from "../assets/events.jpg";
import legal from "../assets/legal.jpeg";
import "../styles/Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects </h1>
        <div className="projectList">
          <ProjectItem name = "Events" image={events}/>
          <ProjectItem name = "Global&Legal" image={legal}/>

        </div>

    </div>
  )
}

export default Projects;