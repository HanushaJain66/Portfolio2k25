import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './Projects.css';
import { Link } from 'react-router-dom';
import img from './expense.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'boxicons/css/boxicons.min.css'; // Add this line to import Boxicons CSS

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className='project-heading' data-aos='fade-up'>
        <h1>My <span>Projects</span></h1>
      </div>
      <div className='project-container'>
        <div className='project' data-aos='fade-right'>
          <h2 className='heading'><a href='http://hamastore.vercel.app'>Ecommerce-Website</a></h2>
          <p className='project-info'>Welcome to our premier ecommerce platform, where browsing, filtering, and purchasing products is a seamless experience. With authenticated login and signup, your privacy and security are prioritized. Effortlessly explore our diverse range of offerings, utilizing intuitive filters to refine your search. Our search function ensures quick access to desired items.</p>
          <p className='Technologies'><span>Technologies Used:</span> React JS,Node JS,Express,MongoDB</p>
          <a href='https://github.com/HanushaJain66/ecommerce-website'>
            <i className='bx bxl-git'></i>
          </a>
        </div>
        <div className='project' data-aos='fade-right'>
          <h2 className='heading'><a href='https://github.com/HanushaJain66/expensemanager'>Personal Expense Manager</a></h2>
          <p className='project-info'>This Personal Expense Manager employs OTP verification during user signup, ensuring secure access. Once registered, users can effortlessly log in and efficiently manage their personal expenses. They have the flexibility to transfer money to other users and register through multiple accounts if desired.</p>
          <p className='Technologies'><span>Technologies Used:</span>Flask,React JS, mySOL</p>
          <a href='https://github.com/HanushaJain66/expensemanager'>
            <i className='bx bxl-git'></i>
          </a>
        </div>
        <div className='project' data-aos='fade-right'>
          <h2 className='heading'><a href='https://hanushajain66.github.io/Final-KOE-submit/'>Koe-Cafe Website</a></h2>
          <p className='project-info'>Developed a visually captivating frontend for FlavorFusion restaurant, featuring detailed menu descriptions and interactive activities</p>
          <p className='Technologies'><span>Technologies Used:</span>HTML,CSS,Javascript</p>
          <a href='https://github.com/HanushaJain66/koe-cafe-website'>
            <i className='bx bxl-git'></i>
          </a>
        </div>
      </div>

      <div className='project-container'>
        <div className='project' data-aos='fade-right'>
          <h2 className='heading'>Facial Attendance Recognition System</h2>
          <p className='project-info'>Introducing an innovative AI project revolutionizing student attendance management. Through our website, a video feed is analyzed by advanced facial recognition algorithms, seamlessly capturing attendance. Real-time data is promptly displayed, empowering educators with instant insights. This automated system eliminates manual processes, saving time and resources..</p>
          <p className='Technologies'><span>Technologies Used:</span>React JS, Node JS,Express,CSV</p>
          <a href='https://github.com/HanushaJain66/facial-attendance-recognition'>
            <i className='bx bxl-git'></i>
          </a>
        </div>
        <div className='project' data-aos='fade-right'>
          <h2 className='heading'><a href='https://hanushajain66.github.io/Adventure/'>Frontend:- Travelling website</a></h2>
          <p className='project-info'>Embark on an exhilarating journey with our travel website, where adventure and exploration await at every turn. Our frontend technology seamlessly integrates ticket and hotel booking functionalities, ensuring a smooth and convenient experience for our users. Whether you're planning a getaway or seeking thrilling adventures, our platform has you covered </p>
          <p className='Technologies'><span>Technologies Used:</span>HTML,CSS, Javascript</p>
          <a href='https://github.com/HanushaJain66/travelling-website'>
            <i className='bx bxl-git'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
