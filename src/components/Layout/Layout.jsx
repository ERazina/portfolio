import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Layout = () => {

  return (
    <>
    <header className="header">
      {/* <nav>
         <ul>
          <li className="list-item">
            <NavLink to="/about" className="link">About</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/resume" className="link">Resume</NavLink>
          </li>
           <li className="list-item">
            <NavLink to="/open-ai" className="link">ChatGPT</NavLink>
          </li> 
        </ul> 
      </nav> */}
      {/* <ThemeSwitcher /> */}
      <LanguageSwitcher />
      </header>
      <div className="layout">
        <Outlet />
      </div>

      <Footer/>
    </>
  );
};

export default Layout;