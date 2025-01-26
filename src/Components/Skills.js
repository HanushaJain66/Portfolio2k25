import React, { useState } from "react";
import "./skills.css"

const Skills = () => {
  const [showProfessionalSkills, setShowProfessionalSkills] = useState(false);
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

  const professionalSkills = [
    { icon: "bx-briefcase", name: "Project Management" },
    { icon: "bx-user-check", name: "Team Leadership" },
    { icon: "bx-bar-chart", name: "Data Analysis" },
    { icon: "bx-speech", name: "Communication" },
    { icon: "bx-leadership", name: "Leadership" },
    { icon: "bx-discussion", name: "Debating" },
    { icon: "bx-adjust", name: "Adaptability" },
    { icon: "bx-group", name: "Team Management" },
    { icon: "bx-presentation", name: "Presentation" },
  ];
  
  const technicalSkills = [
    { icon: "bx-code", name: "JavaScript" },
    { icon: "bx-terminal", name: "Python" },
    { icon: "bx-layer", name: "React" },
    { icon: "bx-layer", name: "React JS" },
    { icon: "bx-html5", name: "HTML" },
    { icon: "bx-css3", name: "CSS" },
    { icon: "bx-code-block", name: "Next.js" },
    { icon: "bx-code-curly", name: "Version Control" },
    { icon: "bx-chip", name: "C++" },
    { icon: "bx-server", name: "Golang" },
    { icon: "bx-merge", name: "Express.js" },
    { icon: "bx-server", name: "Node.js" },
    { icon: "bx-git", name: "Git" },
    { icon: "bx-github", name: "GitHub" },
    { icon: "bx-object", name: "Object-Oriented Programming" },
    { icon: "bx-database", name: "MongoDB" },
    { icon: "bx-database", name: "SQL" },
    { icon: "bx-flask", name: "Flask" },
    { icon: "bx-math", name: "NumPy" },
    { icon: "bx-grid", name: "Pandas" },
  ];
  

  return (
    <div className="skills-section">
       <div className='myskills' data-aos="fade-up">
          <h2>My <span>Skills</span></h2>
        </div>


        <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={() => setShowTechnicalSkills(!showTechnicalSkills)}
        >
          Technical Skills
        </button>
        <div className={`dropdown-content ${showTechnicalSkills ? "show" : ""}`}>
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <div className="skill-circle">
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={() => setShowProfessionalSkills(!showProfessionalSkills)}
        >
          Professional Skills
        </button>
        <div className={`dropdown-content ${showProfessionalSkills ? "show" : ""}`}>
          {professionalSkills.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <div className="skill-circle">
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Skills;
