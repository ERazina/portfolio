import React from 'react';
import { useTranslation } from "react-i18next";
import { Divider, Space } from 'antd';
import './Resume.scss';

const Resume = () => {

  const { t } = useTranslation();

  return (
   <div className="container resume">
      <div className="photo" />
      <h1>{t('name')}</h1>
      <h2>{t('position')}</h2>
      <div className="location">{t('location')}</div>
      {/* <a href="mailto:elina.razina@gmail.com" className="email">elina.razina@gmail.com</a> */}
      <a href="./Elina_Razina_CV.pdf" download className="link-cv">{t('download')}</a>



      <h2>{t('in_touch')}</h2>
      <div className="social">
        <a href="https://t.me/Elina_Razina" className="social-link social-link-telegram" target="_blank"></a>
        <a href="https://wa.me/79112548531" className="social-link social-link-whatsapp" target="_blank"></a>
        <a href="mailto:elina.razina@gmail.com" className="social-link social-link-email" target="_blank"></a>
      </div>
     
      <Divider className="divider"/>

      <h2>{t('skills')}</h2>
        <div className="skills">
        <span class="badge">HTML</span>
        <span class="badge">CSS</span>
        <span class="badge">SASS</span>
        <span class="badge">REACT</span>
        <span class="badge">JAVASCRIPT</span>
        <span class="badge">GIT</span>
        <span class="badge">FIGMA</span>
        <span class="badge">WEBPACK</span>
        <span class="badge">MOBX</span>
        <span class="badge">RESPONSIVE</span>
      </div>
      <Divider className="divider"/>

      {/* <h2>Portfolio</h2> */}
      
    </div>
  );
}

export default Resume;
