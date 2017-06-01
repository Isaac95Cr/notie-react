import React from 'react';
import Note from '../../components/Note/Note';

const displayNotes = (notes, onDelNote) => {
  return notes.map((note) => {
    return (
      <div className="col-sm-4 col-xs-12" key={note._id}>
        <Note onClick={onDelNote} {...note}/>
      </div>
    )
  });
}

const NotesContainer = ({ notes , onDelNote }) => {
  return (
    <div className="row">
        <div className="notes-container">
            {displayNotes(notes, onDelNote)}
        </div>
    </div>
  )
}

export default NotesContainer;
