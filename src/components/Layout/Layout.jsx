import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Layout = () => {

  return (
    <>
    <header className="header">
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