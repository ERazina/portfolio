import React,  {useState} from 'react';
import { Switch } from 'antd';
import { useTranslation } from "react-i18next";

function ThemeSwitcher() {

    const [theme, setTheme] = useState('light');

    const [isChecked, setIsCheked] = useState(true);

    const { i18n } = useTranslation();

  const onChange = (checked) => {
    if(theme === 'dark'){
        setTheme('light')
        setIsCheked(true)
    }
    else{
        setTheme('dark')
        setIsCheked(false)  
    }
  };

  return (
    <Switch
        checkedChildren={'light'}
        unCheckedChildren={'dark'}
        defaultChecked={isChecked}
        onChange={onChange}
    />
  );
}

export default ThemeSwitcher;
