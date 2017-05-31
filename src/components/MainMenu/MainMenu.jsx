import React from 'react';
import MenuIconButton from './../IconButton/MenuIconButton';
import './MainMenu.scss';

const MainMenu = ({ toggleAside }) => {
  const buttonList = [
    {
        iconName:'fa-book',
        onClick: toggleAside,
        id: 'notebooks'
    },
    {
        iconName:'fa-tag',
        onClick: toggleAside,
        id: 'tags'
    },
    {
        iconName:'fa-sticky-note',
        onClick: toggleAside,
        id: 'notes'
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
