import React from 'react';
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className = "experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement  className="vertical-timeline-element--education"
                                      date = "2021 - 2022"
                                      iconStyle={{ background:"#e9d35b", color: "#fff" }}
                                      icon={<WorkIcon />}
                                      >
                                        <h3 className = "vertical-timeline-element-title">
                                            Software Engineering Fellow, Springboard 
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            San Francisco, California
                                        </h4>
                                           <p> Completed an 800-hour course covers key aspects of front-end web development, back-end web development,
                                               databases, and data structures and algorithms. Built and deploy projects with JavaScript, Python, React, 
                                               Flask, HTML, CSS and PostgreSQL.
                                            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work"
                                      date="2019 - 2021"
                                      iconStyle={{ background: "#e9d35b", color: "#fff" }}
                                      icon={<WorkIcon />}
                                      >
                                        <h3 className="vertical-timeline-element-title">
                                             STEM Teacher - Syracuse Academy of Science Charter Schools
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            Syracuse, New York
                                        </h4>
                                        <p>Planned, prepared and taught coding lessons in JavaScript and Python by using Tynker app
                                            to 150 middle school students per year, and gave students individual support.</p>
                                         
            </VerticalTimelineElement>   
                          
            <VerticalTimelineElement className="vertical-timeline-element--work"
                                      date="2007 - 2015"
                                      iconStyle={{ background: "#e9d35b", color: "#fff" }}
                                      icon={<WorkIcon />}
                                      >
                                        <h3 className="vertical-timeline-element-title">
                                             Math Teacher & Manager - Marmara Schools 
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            Bangkok, Thailand
                                        </h4>
                                        <p>Provided meaningful math instruction to improve math skills of children, and lead teachers and staff, set goals and ensure students meet their learning objectives.</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement  className="vertical-timeline-element--education"
                                      date = "2002 - 2007"
                                      iconStyle={{ background: "#3e497a", color: "#fff" }}
                                      icon={<SchoolIcon />}
                                      >
                                        <h3 className = "vertical-timeline-element-title"> METU - Middle East Technical University, Turkey </h3>
                                           <p> BS - Elementary Mathematics Education </p>
            </VerticalTimelineElement> 

            
        </VerticalTimeline>

    </div>
  )
}

export default Experience;
