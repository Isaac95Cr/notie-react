import React from 'react';
import './Editor.scss';

const Editor = ({text, title, onType}) => {
  const onTitleChange = e => onType({title: e.target.value});
  const onTextChange = e => onType({text: e.target.value});
  return (
    <div className='editor'>
      <div className='editor-inner'>
        <input type='text'placeholder='Hi :D!!' onChange={onTitleChange} value={title}/>
        <textarea placeholder='We are going to die ' onChange={onTextChange} value={text}/>
      </div>
    </div>
  );
}

export default Editor;
