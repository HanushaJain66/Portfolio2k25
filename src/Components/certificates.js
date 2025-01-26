import React, { useEffect } from 'react';
import './Certificates.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certificates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const certificates = [
    { image: 'path/to/certificate1.jpg', title: 'Certificate Title 1' },
    { image: 'path/to/certificate2.jpg', title: 'Certificate Title 2' },
    { image: 'path/to/certificate3.jpg', title: 'Certificate Title 3' },
    { image: 'path/to/certificate4.jpg', title: 'Certificate Title 4' },
  ];

  return (
    <div className="certificates-section" data-aos="fade-up">
      <h1 className="certificates-heading">
        My <span>Certificates</span>
      </h1>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card" data-aos="zoom-in">
            <img src={certificate.image} alt={certificate.title} />
            <div className="certificate-title">{certificate.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
