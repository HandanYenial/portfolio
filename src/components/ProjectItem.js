import React from 'react'

function ProjectItem({image, name}) { //each project will have an image and a name
  return (
    <div className= "projectItem">
     <div style={{backgroundImage:`url(${image}`}} className="bgImage"/>
     <h1> {name} </h1>

    </div>
  )
}

export default ProjectItem