import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import "../styles/Home.css";



function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80")` , 
                                   alignItems:'stretch' , alignSelf:'center', resizeMode:'stretch', backgroundSize:'cover'}}>
        <div className = "about">
            <h2> Hi, my name is Handan</h2>
            <div className="prompt">
                <p>I'm a web developer with a passion for learning new skills!</p>
                <a href= "https://www.linkedin.com/in/handanyenial/"> 
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/HandanYenial">
                <GitHubIcon/>
                </a>
            </div>
        </div>
        <div className = "skills">
            <h1> Skills </h1>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4} className="grid">
                      JavaScript
                    </Grid>

                    <Grid item xs={4}>
                      Python
                    </Grid>

                    <Grid item xs={4}>
                       React
                    </Grid>

                    <Grid item xs={4}>
                       HTML
                    </Grid>

                    <Grid item xs={4}>
                       CSS
                    </Grid>

                    <Grid item xs={4}>
                       Flask
                    </Grid>

                    <Grid item xs={4}>
                       PostgreSQL
                    </Grid>

                    <Grid item xs={4}>
                       NodeJS
                    </Grid>

                    <Grid item xs={4}>
                       ExpressJS
                    </Grid>

                    <Grid item xs={4}>
                       Jinja2
                    </Grid>

                    <Grid item xs={4}>
                       Bootstrap
                    </Grid>

                    <Grid item xs={4}>
                        MaterialUI
                    </Grid>
                </Grid>  
        </div>
    </div>
  )
}

export default Home
