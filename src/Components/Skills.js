import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './skills.css';

const Skills = () => {
  const [activeSection, setActiveSection] = useState('professional');

  useEffect(() => {
    Aos.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      <div className="skills-container">
        <h2 className="skills-heading" data-aos="fade-up">
          My<span> Skills</span>
        </h2>

        <div className="skills-buttons" data-aos="fade-right">
          <button
            onClick={() => setActiveSection('professional')}
            className={activeSection === 'professional' ? 'active' : ''}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveSection('personal')}
            className={activeSection === 'personal' ? 'active' : ''}
          >
            Personal
          </button>
        </div>

        {activeSection === 'professional' && (
          <Slider {...settings} className="skills-slider">
            {[
              { icon: 'bxl-html5', name: 'HTML' },
              { icon: 'bxl-css3', name: 'CSS' },
              { icon: 'bxl-javascript', name: 'JavaScript' },
              { icon: 'bxl-mongodb', name: 'MongoDB' },
              { icon: 'bxl-react', name: 'React JS' },
              { icon: 'bxl-nodejs', name: 'Node JS' },
              { icon: 'bxl-postgresql', name: 'mysql' },
              { icon: 'bxl-java', name: 'Java' },
              { icon: 'bxl-c-plus-plus', name: 'C++' },
              { icon: 'bxl-python', name: 'Python' },
              { icon: 'bxl-golang', name: 'Golang' },
              { icon: 'bxl-nextjs', name: 'Next.js' },
              { icon: 'bxl-git', name: 'Git' },
              { icon: 'bxl-github', name: 'GitHub' },
              { icon: 'bxl-version-control', name: 'Version Control' }
            ].map((skill, index) => (
              <div className="skill-card" key={index} data-aos="fade-up">
                <div className="skill-circle">
                  <i className={`bx ${skill.icon}`}></i>
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </Slider>
        )}

        {activeSection === 'personal' && (
          <Slider {...settings} className="skills-slider">
            {[
              { icon: 'bxs-user-voice', name: 'Communication' },
              { icon: 'bxs-group', name: 'Leadership' },
              { icon: 'bxs-microphone', name: 'Public Speaking' },
              { icon: 'bxs-chat', name: 'Debating' }
            ].map((skill, index) => (
              <div className="skill-card" key={index} data-aos="fade-up">
                <div className="skill-circle">
                  <i className={`bx ${skill.icon}`}></i>
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default Skills;
