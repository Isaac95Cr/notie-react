import React from 'react';
import './Editor.scss';

const Editor = () => {
  return (
    <div className='editor'>
      <div className='editor-inner'>
        <input type='text'placeholder='Hi :D!!'/>
        <textarea placeholder='We are going to die '/>
      </div>
    </div>
  );
}

export default Editor;
