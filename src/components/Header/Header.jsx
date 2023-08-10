import React from 'react';
import { Select } from 'antd';
import { Row, Col } from 'antd';
import MenuComponent from '../MenuComponent/MenuComponent';
import { useTranslation } from "react-i18next";
import './Header.scss';

function Header() {

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
      <header>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {/* <MenuComponent /> */}
            <Select
                  defaultValue="en"
                  style={{ width: 120 }}
                  options={[{ value: 'en', label: 'en' }, { value: 'ru', label: 'ru' }, { value: 'de', label: 'de' }]}
                  onChange={changeLanguage}
                  className='language_switcher'
                />
          </Col>
        </Row>
      </header>
  );
}

export default Header;
