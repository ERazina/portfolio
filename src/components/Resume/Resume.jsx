import React from 'react';
import { Divider } from 'antd';
import './Resume.scss';

const Resume = () => {
  return (
   <div className="container resume">
      <div className="photo" />
      <h1>Elina Razina</h1>
      <h2>Frontend developer</h2>
      <div className="location">Saint-Petersburg, Russia</div>
      <a href="./Elina_Razina_CV.pdf" download className="link-cv" aria-label="Download CV">Download CV</a>

      <h2>Contact me</h2>
      <div className="social">
        <a href="https://t.me/Elina_Razina" className="social-link social-link-telegram" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><span style={{display: 'none'}}>Telegram link</span></a>
        <a href="https://wa.me/79112548531" className="social-link social-link-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><span style={{display: 'none'}}>WhatsApp link</span></a>
        <a href="mailto:elina.razina@gmail.com" className="social-link social-link-email" target="_blank" rel="noopener noreferrer" aria-label="Mail"><span style={{display: 'none'}}>Email link</span></a>
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
      
    </div>
  );
}

export default Resume;
