import React from 'react';

import IconButton from '../../components/IconButton/IconButton'

const MainMenu = (props) => {
  const iconList = [
    {
        iconClass:'fa fa-plus',
        buttonClass:'hide-on-desktop'
    },
    {
        iconClass:'fa fa-times',
        buttonClass:'hide-on-desktop clear-editor-button'
    },
    {
        iconClass:'fa fa-sticky-note',
        buttonClass:''
    },
    {
        iconClass:'fa fa-book',
        buttonClass:''
    },
    {
        iconClass:'fa fa-tag',
        buttonClass:'',
        onclick: props.toggleAside
    }
  ];

  return (
    <div className="main-menu">
        <div className="icon-container">
            {iconList.map((item,index) =>(
                <IconButton key={index} classes = {item} />
                //<IconButton key={index} iconClass = {x.iconClass} buttonClass = {x.buttonClass} />
            ))}
        </div>
    </div>
  );
};

export default MainMenu;
