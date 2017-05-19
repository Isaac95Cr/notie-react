import React from 'react';
import './Note.scss';

const Note = ({title, text}) => {
    return(
        <div className="note">
            <h4 className="note-title"> {title}</h4>
            <p>{text}</p>
        </div>
    )
}
export default Note;
