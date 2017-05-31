import React from 'react';
import './IconButton.scss';

const IconButton = ({ iconName, onClick, isHiddenOnDesktop, customClass, id }) => {
  return (
    <button
      type="button"
      name="button"
      id = {id}
      onClick={onClick}
      className={`icon-button ${customClass} ${isHiddenOnDesktop ? 'hide-on-desktop' : ''}`}
    >
        <i className={`fa ${iconName}`} aria-hidden="true"></i>
    </button>
  )
}

export default IconButton;
