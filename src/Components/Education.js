import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <>
      <section className='education' id='education'>
        <div className='myeducation' data-aos="fade-up">
          <h2>My <span>Education</span></h2>
        </div>

        <div className='info-education'>
          <div className='university' data-aos="fade-right">
            <div className='degree'>
              <h4>Sardar Vallabhbhai National Institute of Technology, Surat</h4>
              <p>BTech (Bachelor of Technology) in Computer Science and Engineering</p>
            </div>
            <div className='year'>
              <p>9.57 CGPA (Cumulative Grade per annum) (sem 5)</p>
              <p>2022-2026</p>
            </div>
          </div>

          <div className='university' data-aos="fade-right">
            <div className='degree'>
              <h4>Saint Paul's Senior Secondary School, Jaora, Madhya Pradesh</h4>
              <p>Higher Education, Class 12th, CBSE (Central Board of Secondary Education)</p>
            </div>
            <div className='year'>
              <p>9.24 percentage</p>
              <p>2021</p>
            </div>
          </div>

          <div className='university' data-aos="fade-right">
            <div className='degree'>
              <h4>Saint Paul's Senior Secondary School, Jaora, Madhya Pradesh</h4>
              <p>Class 10th, CBSE (Central Board of Secondary Education)</p>
            </div>
            <div className='year'>
              <p>9.48 percentage</p>
              <p>2019</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;