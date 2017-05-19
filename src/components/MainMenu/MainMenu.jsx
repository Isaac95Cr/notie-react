import React from 'react';
import MenuIconButton from './../IconButton/MenuIconButton';
import './MainMenu.scss';

const MainMenu = ({ toggleAside }) => {
  const buttonList = [
    {
        iconName:'fa-plus',
        isHiddenOnDesktop: true
    },
    {
        iconName:'fa-times',
        isHiddenOnDesktop: true
    },
    {
        iconName:'fa-book'
    },
    {
        iconName:'fa-tag'
    },
    {
        iconName:'fa-sticky-note',
        onClick: toggleAside
    }
  ];
  return (
    <div className="main-menu">
        <div className="icon-container">
            {buttonList.map((button, index) => (
              <MenuIconButton key={index} {...button} />
            ))}
        </div>
    </div>
  );
};

export default MainMenu;
