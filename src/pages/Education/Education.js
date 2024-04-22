import React from 'react';
import'./Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import Fade from 'react-reveal/Fade';

const Education = () => {
  return (
   <>
   <div className='container education' id='education'>
    <Fade bottom>
   <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
    Education
    </h2>
   </Fade>
    <hr/>
    <VerticalTimeline lineColor='#017570'>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021-2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">LN College of Management & Technology</h4>
    <p>
    Learn more Languages and also learn computers opretions.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019-2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary Certificate</h3>
    <h4 className="vertical-timeline-element-subtitle">Abhinav Junior College</h4>
    <p>
    In Commerce Field i take IT and Mathematics also learn more things.
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
    <h4 className="vertical-timeline-element-subtitle">Raja Shivaji Vidhyalaya</h4>
    <p>
    Learn more things of History, Science, Mathematics, Computer knowledge etc.
    </p>
  </VerticalTimelineElement>
  
    </VerticalTimeline>
   </div>
   </>
  )
}

export default Education