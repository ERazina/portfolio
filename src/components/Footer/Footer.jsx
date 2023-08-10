import React from 'react';
// import { useTranslation } from "react-i18next";
import './footer.scss';


function Footer() {
  // const { t } = useTranslation();

  return (
      <footer className="footer">
        <div className="container">
          <row>
            Copyright 2023 Elina Razina
          </row>
        </div>
      </footer>
  );
}

export default Footer;
