import React from 'react';
import './Note.scss';

const Note = ({title, text}) => {
    return(
        <div className="note">
          <div className="note-inner">
            <h4 className="note-title"> {title || 'Untitled'}</h4>
            <p>{text || 'Empty note :('}</p>
          </div>
        </div>
    )
}
export default Note;
