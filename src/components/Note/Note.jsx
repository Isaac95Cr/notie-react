import React from 'react';
import './Note.scss';

const Note = ({title, text}) => {
    return(
        <div className="note">
          <div className="note-inner">
            <h4 className="note-title"> {title}</h4>
            <p>{text}</p>
          </div>
        </div>
    )
}
export default Note;
