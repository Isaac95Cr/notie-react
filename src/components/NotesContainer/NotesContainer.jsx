import React from 'react';
import Note from '../../components/Note/Note';
import api from './../../../api/api';

const displayNotes = (notes) => {
  return notes.map((note) => {
    return (
      <div className="col-sm-4 col-xs-12" key={note.id}>
        <Note  {...note}/>
      </div>
    )
  });
}

const NotesContainer = () => {
  return (
    <div className="row">
        <div className="notes-container">
            {displayNotes(api.getAllNotes())}
        </div>
    </div>
  );
};

export default NotesContainer;
