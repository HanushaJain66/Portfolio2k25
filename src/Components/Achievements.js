import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Achivements.css";

const Achievements = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="achievements-container">
      <h2 className="achievements-heading" data-aos="fade-up">
        Achievements <span>&amp; Highlights</span>
      </h2>
      <div className="central-line"></div>
      <div className="achievement left" data-aos="fade-right">
        Winner of SIH 2k24
      </div>
      <div className="achievement right" data-aos="fade-left">
        Among the top 50 female coders in Hackon with Amazon
      </div>
      <div className="achievement left" data-aos="fade-right">
        Participated in Code for Good 2k24
      </div>
      <div className="achievement right" data-aos="fade-left">
        Solved 700+ questions on LeetCode
      </div>
    </div>
  );
};

export default Achievements;
