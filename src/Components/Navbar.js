import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
  };

  const closeSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show-sidebar');
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className='header'>
        <Link to='#' className='logo'>
          Hanusha Jain's Portfolio
        </Link>

        {/* Sidebar */}
        <div className='sidebar'>
          <ul>
            <li><a href="#home" className='nav' onClick={closeSidebar}>Home</a></li>
            <li><a href="#about" className='nav' onClick={closeSidebar}>About</a></li>
            <li><a href="#education" className='nav' onClick={closeSidebar}>Education</a></li>
            <li><a href="#project" className='nav' onClick={closeSidebar}>Project</a></li>
            <li><a href="#skills" className='nav' onClick={closeSidebar}>Skills</a></li>
            <li><a href="#achivements" className='nav' onClick={closeSidebar}>Achivements</a></li>
            <li><a href="#contact" className='nav' onClick={closeSidebar}>Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        {windowWidth < 1000 ? (
          <a href='#' className='Hamburger-menu' onClick={toggleSidebar}>=</a>
        ) : (
          <nav className='navbar'>
            <ul>
              <li><a href="#home" className='nav'>Home</a></li>
              <li><a href="#about" className='nav'>About</a></li>
              <li><a href="#education" className='nav'>Education</a></li>
              <li><a href="#project" className='nav'>Project</a></li>
              <li><a href="#skills" className='nav'>Skills</a></li>
              <li><a href="#achivements" className='nav'>Achivements</a></li>
              <li><a href="#contact" className='nav'>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;