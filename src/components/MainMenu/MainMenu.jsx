import React from 'react';
import MenuIconButton from './../IconButton/MenuIconButton';
import './MainMenu.scss';

const MainMenu = ({ toggleSlidePanel }) => {
  const buttonList = [
    {
        iconName:'fa-book',
        onClick: toggleSlidePanel,
        id: 'notebooks'
    },
    {
        iconName:'fa-tag',
        onClick: toggleSlidePanel,
        id: 'tags'
    },
    {
        iconName:'fa-sticky-note',
        onClick: toggleSlidePanel,
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
