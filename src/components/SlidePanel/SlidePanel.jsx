import React from 'react';
import './SlidePanel.scss';

export const Directions = {
  Right: 'right',
  Left: 'left',
  Up: 'up',
  Down: 'down'
}

export const SlidePanel = ({ direction, isActive, children }) => {
  return (
    <div className={`container-fluid slide-panel from-${direction} ${isActive ? `active-${direction}` : ''}`} >
      {children}
    </div>
  );
}

export default SlidePanel;
