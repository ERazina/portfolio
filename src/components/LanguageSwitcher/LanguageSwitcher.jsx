import React from 'react';
import { Select } from 'antd';
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Select
            defaultValue="en"
            style={{ width: 120 }}
            options={[{ value: 'en', label: 'en' }, { value: 'ru', label: 'ru' }, { value: 'de', label: 'de' }]}
            onChange={changeLanguage}
            className='language_switcher'
        />
  );
}

export default LanguageSwitcher;
