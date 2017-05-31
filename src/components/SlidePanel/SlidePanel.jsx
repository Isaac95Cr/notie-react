import React from 'react';
import './SlidePanel.scss';

export const Directions = {
  Right: 'right',
  Left: 'left',
  Up: 'up',
  Down: 'down'
}
export const Panels = {
  Notebooks: 'notebooks',
  Notes: 'notes',
  Tags: 'tags'
}


export const SlidePanel = ({ visiblePanel, direction, isActive, children, panel}) => {
  return (
    <div className={`container-fluid slide-panel from-${direction} ${visiblePanel===panel ? `active-${direction}` : ''}`} >
      {children}
    </div>
  );
}

export default SlidePanel;
