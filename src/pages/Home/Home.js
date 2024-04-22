import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from './Tushar Pawar Resume.pdf'
const Home = () => {
  return (
    <>
    <div className='container-fluid home-container' id='home'>
      <div className='container home-content'>
        <h1>Hi I'm a</h1>
        <h2>
        <Typewriter
          options={{
          strings: ['MERN Stack Developer!', 'Full Stack Developer!','React Developer!'],
          autoStart: true,
          loop: true,
           }}
          />
        </h2>
        <div className='home-buttons'>
          <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=9307693259" rel="noreferrer" target='_blank'>Hire Me</a>

          <a className='btn btn-cv' href={Resume} download='Tushar_Resume.pdf'> My Resume</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home