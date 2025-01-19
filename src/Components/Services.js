import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    <Navbar/>
    <section>
      <div className='services' id='services'>
            <div className='container1'>
              <h1 className='sub-title'>My<span>Services</span></h1>
              <div className='services-list'>
                <div className='service-description'>
                  <i className='bx bx-code' id="s1"></i>
                  <h2>UI/UX design</h2>
                  <p >nfdsksfnkjsdddddfndsnnnnnnnnnddddddddd</p>
                  <Link to='#' className='read'>Learn more</Link>
                </div>
                <div className='service-description'>
                  <i className='bx bx-crop' id='s2'></i>
                  <h2>UI/UX design</h2>
                  <p >nfdsksfnkjsdddddfndsnnnnnnnnndddddd</p>
                  <Link to='#' className='read'>Learn more</Link>
                </div>
                <div className='service-description'>
                  <i className='bx bxl-apple' id='s3'></i>
                  <h2>UI/UX design</h2>
                  <p >nfdsksfnkjsdddddfndsnnnnnnnnnddddddddddddd</p>
                  <Link to='#' className='read'>Learn more</Link>
                </div>
              </div>
            </div>
      </div>
    </section>
    </>
  )
}

export default Services
