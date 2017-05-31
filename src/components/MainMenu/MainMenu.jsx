import React from 'react';
import MenuIconButton from './../IconButton/MenuIconButton';
import './MainMenu.scss';

const MainMenu = ({ toggleAside , toggleAddTags, toggleAddNotebooks}) => {
  const buttonList = [
    {
        iconName:'fa-book',
        onClick: toggleAddNotebooks
    },
    {
        iconName:'fa-tag',
        onClick: toggleAddTags
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
