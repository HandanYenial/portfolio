import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"


function Footer() {
  return (
    <div className = "footer">
        <div className= "socialMedia"> 
        <a href= "https://www.linkedin.com/in/handanyenial/"> 
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/HandanYenial">
                <GitHubIcon/>
                </a>

        </div>
        <p> &copy; 2023 HandanYenial </p>
    </div>
  )
}

export default Footer