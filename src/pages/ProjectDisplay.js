import React from 'react';
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from '@mui/icons-material/GitHub';
import { useParams } from "react-router-dom";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams(); //params as project/:id 
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> { project.name }</h1>
      <img src={ project.image } alt="project"/>
      <p>
        <b>Skills:</b> { project.skills }
      </p>
      <GithubIcon/>
    </div>
  );
}

export default ProjectDisplay;