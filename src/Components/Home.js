import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
import img from './image.jpg';
import About from './About';
import Education from './Education';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievements from './Achievements';
import Certificates from './certificates';

const Home = () => {
  const attributes = ['Developer', 'Coder', 'Traveler']; // Add more attributes as needed
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % attributes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section id='home' className='home'>
        <div className='home-content'>
          <h3>Hello, It's Me</h3>
          <h1>Hanusha Jain</h1>
          <h3>And I'm a <span className='text'>{attributes[index]}</span></h3>
          <p>"Driven by a fervor for innovation, I thrive on crafting projects that solve real-world challenges, embracing life's challenges with gusto."
          </p><p>expertise is
            to create and website design , Frontend design , many more.......</p>
          <div className='home-sci'>
            <Link to='https://www.linkedin.com/in/hanusha-jain-332b06288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='lo'><i className='bx bxl-linkedin'></i></Link>
            <Link to='https://github.com/HanushaJain66' className='lo'><i className='bx bxl-git'></i></Link>
            <Link to='https://www.instagram.com/hanushajain?igsh=dzVrNmF5cHp6Zzds' className='lo'><i className='bx bxl-instagram'></i></Link>
          </div>
          <Link to="https://drive.google.com/file/d/1n8lPWzdzaWFPnuHXDoIO2cTsgpxnjbJU/view?usp=sharing" className='btn-box' >My Resume</Link>
        </div>
        <div className='home-image'>
          <img src={img} alt="myimage" className='myimage'></img>
        </div>
      </section>
      <hr className='section-separator' id='about' />
      <About />
      <hr className='section-separator' id='education' />
      <Education />
      <hr className='section-separator' id='project'/>
      <Project />
      {/* <hr className='section-separator' id='skills'/>
      <Certificates /> */}
      <hr className='section-separator' id='skills'/>
      <Skills />
      <hr className='section-separator' id='achivements'/>
      <Achievements/>
      <hr className='section-separator' id='contact' />
      <Contact />
    </>
  );
}

export default Home;