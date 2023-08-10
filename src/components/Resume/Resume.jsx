import React from 'react';
// import { useTranslation } from "react-i18next";
import { Divider } from 'antd';
import './Resume.scss';

const Resume = () => {

  // const { t } = useTranslation();

  return (
   <div className="container resume">
      <div className="photo" />
      <h1>Elina Razina</h1>
      <h2>Frontend developer</h2>
      <div className="location">Saint-Petersburg, Russia</div>
      {/* <a href="mailto:elina.razina@gmail.com" className="email">elina.razina@gmail.com</a> */}
      <a href="./Elina_Razina_CV.pdf" download className="link-cv">Download CV</a>



      <h2>Contact me</h2>
      <div className="social">
        <a href="https://t.me/Elina_Razina" className="social-link social-link-telegram" target="_blank"></a>
        <a href="https://wa.me/79112548531" className="social-link social-link-whatsapp" target="_blank"></a>
        <a href="mailto:elina.razina@gmail.com" className="social-link social-link-email" target="_blank"></a>
      </div>
     
      <Divider className="divider"/>

      <h2>Skills</h2>
        <div className="skills">
        <span class="badge skills-badge">HTML</span>
        <span class="badge skills-badge">CSS</span>
        <span class="badge skills-badge">SASS</span>
        <span class="badge skills-badge">REACT</span>
        <span class="badge skills-badge">JAVASCRIPT</span>
        <span class="badge skills-badge">GIT</span>
        <span class="badge skills-badge">FIGMA</span>
        <span class="badge skills-badge">WEBPACK</span>
        <span class="badge skills-badge">MOBX</span>
        <span class="badge skills-badge">RESPONSIVE</span>
      </div>
      <Divider className="divider"/>

      {/* <h2>Portfolio</h2> */}
      
    </div>
  );
}

export default Resume;
