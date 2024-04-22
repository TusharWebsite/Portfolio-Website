import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <>
    <div className=' work' id='work'>
       <div className='container work-exp'>
        <Fade bottom>
        <h2 className='col-12 mt-3 mb-1 text-center '>
        Work Experience
        </h2>
        </Fade>
       <hr/>
       </div>
       <VerticalTimeline>
       <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="1/2/2024-30/4/2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">MERN Stack Developer Intern</h3>
    <p>
    Autowhat company is provide service of Chat Bot to her
client so developers work is make a chat bot.
For making a chat bot we use of Node.js, Express.js and
MongoDB.
And also Design websites using the React.js.

    </p>
  </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
    </>
  )
}

export default Experience