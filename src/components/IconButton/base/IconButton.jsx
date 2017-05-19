import React from 'react';
import './IconButton.scss';

const IconButton = ({ iconName, onClick, isHiddenOnDesktop }) => {
  return (
    <button
      type="button"
      name="button"
      onClick={onClick}
      className={`icon-button ${isHiddenOnDesktop ? 'hide-on-desktop' : ''}`}
    >
        <i className={`fa ${iconName}`} aria-hidden="true"></i>
    </button>
  )
}

export default IconButton;
