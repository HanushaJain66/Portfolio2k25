import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

const Contact = () => {
  return (
    <>
    <div className='myeducation'><h2 className='connection' data-aos="fade-up">LET'S <span>Connect</span></h2></div>
    
    <section className='contact' id='contact' data-aos="fade-up">
      <div className='contact-text'>
        <h2>Contact <span>Me</span></h2>
        <h4>Let's Work Together</h4>
        <p>Ready to bring your projects to life? Let's collaborate! I'm a passionate Computer Science student eager to work on exciting projects. Whether it's coding, web development, or tech challenges, I'm up for it. Reach out, and let's get started on your next venture today</p>
        <div className='contact-list'>
          <li><i className='bx bxs-send'></i>hanushajain04@gmail.com</li>
          <li><i className='bx bxs-phone'></i>8982571601</li>
        </div>
        <div className='contact-icons'>
          <Link to="#"><i className='bx bxl-facebook-circle'></i></Link>
          <Link to="https://www.linkedin.com/in/hanusha-jain-332b06288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='bx bxl-linkedin'></i></Link>
          <Link to=""><i className='bx bxl-instagram'></i></Link>
          <Link to='https://github.com/HanushaJain66'><i className='bx bxl-git'></i></Link>
        </div>
      </div>
      <div className='contact-form'>
        <h4>Fill Free to contact anytime</h4>
        <form action=''>
          <input type='' placeholder='Enter your Name' required></input>
          <input type='' placeholder='Enter your Name' required></input>
          <input type='email' placeholder='Enter your Email' required></input>
          <input type='' placeholder='Enter your Subject'></input>
          <textarea name="" id="" cols="40" rows="10" placeholder='Enter Your Message' required></textarea>
          <input type='submit' value="submit" className='send' required></input>
          
        </form>
      </div>
      </section>
    </>
  )
}

export default Contact
