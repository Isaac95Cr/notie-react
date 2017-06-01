import React from 'react';
import './Note.scss';
import IconButton from '../IconButton/base/IconButton';

const Note = ({title, text, _id, onClick}) => {
    return(
        <div className="note">
          <div className="note-inner">
            <div className="note-header">
               <h4 className="note-title"> {title || 'Untitled'} </h4>
               <IconButton id={_id} iconName = "fa-times" onClick ={onClick}/>
            </div>
            <p>{text  || 'Empty note :('}</p>
          </div>
        </div>
    )
}
export default Note;
