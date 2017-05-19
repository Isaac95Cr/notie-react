import React from 'react';
import Editor from './../Editor/Editor';

const EditorPanel = () => {
  return (
    <section className = 'editor-panel row'>
      <div className='col-sm-2 hidden-col-xs'>
        here tools
      </div>
      <div className='col-sm-8 col-xs-12'>
        <Editor />
      </div>
    </section>
  )
}

export default EditorPanel;
