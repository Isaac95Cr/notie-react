import React from 'react';
import './SlidePanel.scss';

export const Directions = {
  Right: 'right',
  Left: 'left',
  Up: 'up',
  Down: 'down'
}

export const SlidePanel = ({ component, direction, isActive, notebooks, notes, tags}) => {
  const Component = component;
  return (
    <div className={`container-fluid slide-panel from-${direction} ${isActive ? `active-${direction}` : ''}`} >
      <Component notes={notes} notebooks={notebooks} tags={tags} />
    </div>
  );
}

export default SlidePanel;
