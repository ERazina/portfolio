import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = () => {

  return (
    <>
      <main className="layout">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;