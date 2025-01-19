import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import img from './image.jpg';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='about-text' >
        <h2 data-aos="fade-up">About <span>Me</span></h2>
        <h4 data-aos="fade-right">FullStack Developer!</h4>
        <p data-aos="fade-right">Highly motivated Computer Science and Engineering student with a proven track record of exceptional academic performance, exemplified by a stellar 9.57 Cumulative Grade Point Average (CGPA). Possessing strong communication and collaborative abilities. I am actively seeking an Engineering student position in order to further apply and enhance my skill set.</p>
      </div>
    </section>
  );
}

export default About;