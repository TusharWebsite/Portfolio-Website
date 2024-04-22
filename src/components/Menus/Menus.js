import React from 'react'
import './Menus.css'
import Tushar from './Tushar.jpeg'
import {FcAbout, FcContacts, FcGraduationCap, FcHome, FcPortraitMode, FcSelfServiceKiosk} from 'react-icons/fc'
import { FaDiagramProject } from "react-icons/fa6";
import { Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? ( 
        <>
        <Fade left>
        <div className='navbar-profile-pic'>
        <img src={Tushar} alt='profile pic' />
    </div>
    <div className='nav-items'>
      <div className='nav-item'>
        <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}> <FcHome/>Home </Link></div>
        <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100}> <FcAbout/>About </Link></div>
        <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100}> <FcGraduationCap/>Education </Link></div>
        <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}> <FcSelfServiceKiosk/>Tech Stack </Link></div>
        <div className='nav-link'><Link to='project' spy={true} smooth={true} offset={-100} duration={100}> <FaDiagramProject/>Projects </Link></div>
        <div className='nav-link'><Link to='work' spy={true} smooth={true} offset={-100} duration={100}> <FcPortraitMode/>Work Experience  </Link></div>
        <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}> <FcContacts/>Contact </Link></div>
      </div>
    </div>
    </Fade>
        </>
    ): (
      <div className='nav-items'>
      <div className='nav-item'>
      <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}> <FcHome/></Link></div>
        <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100}> <FcAbout/></Link></div>
        <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100}> <FcGraduationCap/></Link></div>
        <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}> <FcSelfServiceKiosk/></Link></div>
        <div className='nav-link'><Link to='project' spy={true} smooth={true} offset={-100} duration={100}> <FaDiagramProject/></Link></div>
        <div className='nav-link'><Link to='work' spy={true} smooth={true} offset={-100} duration={100}> <FcPortraitMode/></Link></div>
        <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}> <FcContacts/></Link></div>
      </div>
    </div>
    
    )}
   
    </>
  )
}

export default Menus