import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' // Changed from msg to message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = JSON.stringify(formData);
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://script.google.com/macros/s/AKfycbyuAi0fP4Xq3MjFX_wj9F7VNUvawB5lQfjKnHfQpdXJIva3ZNR-Z3XDvtIubxGKDSnh/exec?action=doPost&callback=?', // Using CORS proxy
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' // Changed to form-urlencoded
      },
      data: data
    };
  
    try {
        alert('Successfully Send Message')
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      
      // Optionally, you can show a success message here
    } catch (error) {
      console.log(error);
      // Optionally, you can show an error message here
    }
  };
  

  return (
    <>
      <div className='contact' id='contact'>
        <div className='card card0 border-0'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='card1'>
                <div className='row border-line image'>
                  <img src='https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711065600&semt=ais' alt='contact' />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='row'>
                <div className=' card2 d-flex card border-0 px-4 py-2 '>
                  <h6>
                    Contact Us
                    <FaLinkedin color='blue' size={30} className='ms-2' />
                    <AiOutlineGithub size={35} className='ms-2' />
                  </h6>
                </div>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                  <small className='or text-center'>OR</small>
                  <div className='line' />
                </div>
                <div className='row px-3'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name*' className='mb-3' value={formData.name} onChange={handleChange} />
                    <input type='email' name='email' placeholder='Email ID*' className='mb-3' value={formData.email} onChange={handleChange} />
                    <textarea name='message' placeholder='Any Message*' className='mb-3' value={formData.message} onChange={handleChange} /> {/* Changed msg to message */}
                    <button type='submit' className='send'>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
