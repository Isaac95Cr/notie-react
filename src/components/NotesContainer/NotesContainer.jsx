import React from 'react';
import Note from '../../components/Note/Note';

const displayNotes = (notes) => {
  return notes.map((note) => {
    return (
      <div className="col-sm-4 col-xs-12" key={note._id}>
        <Note  {...note}/>
      </div>
    )
  });
}

const NotesContainer = ({notes}) => {
  return (
    <div className="row">
        <div className="notes-container">
            {displayNotes(notes)}
        </div>
    </div>
  )
}

export default NotesContainer;
