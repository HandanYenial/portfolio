import React from 'react';
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import "../styles/Experience.css";


function Experience() {
  return (
    <div className = "experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement  className="vertical-timeline-element--education"
                                      date = "2002 - 2007"
                                      iconStyle={{ background: "#3e497a", color: "#fff" }}
                                      icon={<SchoolIcon />}
                                      >
                                        <h3 className = "vertical-timeline-element-title"> METU - Middle East Technical University, Turkey </h3>
                                           <p> BS - Elementary Mathematics Education </p>
                                        
            </VerticalTimelineElement>
            <VerticalTimelineElement>
                
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
  )
}

export default Experience