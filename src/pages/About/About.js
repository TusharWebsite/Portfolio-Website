import React from 'react'
import './About.css'
import Tushar2 from './Tushar2.jpeg'
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <>
    <div className='about ' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
               <img src={Tushar2} alt='tushar'/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 '>
              <Fade bottom><h2>ABOUT ME</h2></Fade>
                <hr/>
                <p className='container'>My name is Tushar Pawar, and I am currently in my third year of pursuing a Bachelor's degree in Computer Applications
                   at LN College. My academic focus lies in mastering MERN stack development, and I'm actively engaged in refining my skills through practical experience. Presently, I'm immersed in an internship at Autowhat Company,
                    where I'm gaining invaluable insights into the industry. In addition to my coursework and internship responsibilities, I've embarked on several projects, including crafting a portfolio website, developing a MERN stack application, and creating a dynamic to-do list. Currently, I'm passionately working on constructing an AI-powered chatbot akin to ChatGPT. These endeavors reflect my dedication to continuous learning and my aspiration to make meaningful contributions to the field of technology.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About