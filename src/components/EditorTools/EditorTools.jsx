import React from 'react';
import ToolsIconButton from './../IconButton/ToolsIconButton';
import './EditorTools.scss';

const renderButtons = (buttons) => {
  return buttons.map((button, index) => {
    return (
      <ToolsIconButton key={index} {...button} />
    )
  });
}

const EditorTools = ({buttons}) => {
  return (
    <div className='editor-tools'>
      {renderButtons(buttons)}
    </div>
  )
}

export default EditorTools;
