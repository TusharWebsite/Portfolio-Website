import React from 'react'
import'./Project.css'
import Fade from 'react-reveal/Fade';

const Project = () => {
  return (
   <>
   <div className='container project' id='project'>
    <Fade bottom>
    <h2 className='col-12 mt-3 mb-1 text-center'>PROJECTS</h2>
    </Fade>
   <hr/>
  
   <p className='pb-3 text-center mb-5 mt-5'>I've embarked on several projects, including crafting a portfolio website, developing a MERN stack application, and creating a dynamic to-do list. Currently, 
   I'm passionately working on constructing an AI-powered chatbot akin to ChatGPT. These endeavors reflect my dedication to continuous learning and my aspiration to make meaningful contributions 
   to the field of technology.</p>
   <div className='row' id='ads'>
    <div className='col-md-4'>
    <div className='card rounded'>
    <div className='card-image'>
    <span className='card-notify-badge'>Full Stack </span>
    <img src='https://codehalweb.com/wp-content/uploads/2023/05/thumbnail-12.jpg' alt='project1'/>
    </div>
    <div className='card-image-overly m-auto mt-3'>
      <span className='card-detail-badge'>React</span>
      <span className='card-detail-badge'>Node</span>
      <span className='card-detail-badge'>Express</span>
      <span className='card-detail-badge'>Bootsrap</span>
    </div>
    <div className='card-body m-auto'>
      <div className='ad-title'>
        <h5>PORTFOLIO WEBSITE</h5>
      </div>
    </div>
    </div>
    </div>
    <div className='col-md-4'>
    <div className='card rounded'>
    <div className='card-image'>
    <span className='card-notify-badge'>MERN Stack </span>
    <img src='https://cdn3.vectorstock.com/i/1000x1000/10/02/daily-tasks-icon-set-premium-symbol-in-different-vector-27281002.jpg' alt='project 2'/>
    </div>
    <div className='card-image-overly m-auto mt-3'>
      <span className='card-detail-badge'>React</span>
      <span className='card-detail-badge'>Node</span>
      <span className='card-detail-badge'>Express</span>
      <span className='card-detail-badge'>MongoDB</span>
    </div>
    <div className='card-body m-auto'>
      <div className='ad-title'>
        <h5>Daily Task</h5>
      </div>

    </div>
    </div>
    </div>
    <div className='col-md-4'>
    <div className='card rounded'>
    <div className='card-image'>
    <span className='card-notify-badge'>React</span>
    <img src='https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds' alt='project3'/>
    </div>
    <div className='card-image-overly m-auto mt-3'>
      <span className='card-detail-badge'>React</span>
      <span className='card-detail-badge'>Bootsrap</span>
    </div>
    <div className='card-body m-auto'>
      <div className='ad-title'>
        <h5>To-Do List</h5>
      </div>
    </div>
    </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Project