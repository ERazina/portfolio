import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import  logo  from '../../images/logo.png'
import './Layout.scss';

const Layout = () => {

  return (
    <>
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
    </header>
      <main className="layout">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;