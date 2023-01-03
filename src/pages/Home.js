import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
        <div className = "about">
            <h2> Hi, my name is Handan</h2>
            <div className="prompt">
                <p>A software developer with a passion of learning new skills!</p>
                <LinkedInIcon/>
                <GitHubIcon/>
                <AlternateEmailIcon/>
            </div>
        </div>
        <div className = "skills">
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <span>
                        JavaScript, Python, ReactJS, HTML, CSS, BootStrap, MaterialUI, NodeJS,
                        Express.JS, PostgrSQL, Flask, Jinja2
                    </span>
                </li>
            </ol>

        </div>

    </div>
  )
}

export default Home