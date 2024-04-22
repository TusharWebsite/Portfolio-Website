import React from 'react'
import './Techstack.css'
import { Techstacklist } from '../../utils/Techstacklist'
import Fade from 'react-reveal/Fade';

const Techstack = () => {
  return (
    <>
    <div className='container techstack' id='techstack'>
      <Fade bottom>
      <h2 className='col-12 mt-3 mb-1 text-center'>TECHNOLOGIES  STACK</h2>
      </Fade>
    <hr/>
    <p className='pb-3 text-center mt-4'><strong>👉 Including Programming Language,Framework,Database,Front-End,Back-End Tool </strong></p>
    <div className='row '>
        {Techstacklist.map(tech =>(
        <div key={tech._id} className='col-md-4'>
        <div className='card m-2'>
          <div className='card-content'>
            <div className='card-body'>
              <div className='media d-flex justify-content-center'>
                <div className='alig-self-center'>
                <tech._icon className="tech-icon"/>
                </div>
                <div className='media-body'>
                 <h5> {tech._name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Techstack