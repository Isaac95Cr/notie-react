import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavBarCollapse from '../../components/NavBarCollapse/NavBarCollapse';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import './NoteView.scss';

const AsideNotes = ({ notes, notebooks, tags, onSearch, onDelNote, onSelectNote }) => {
  return (
    <div className='row'>
      <div className="note-view">
        <NavBar />
        <div className="col-md-3">
          <NavBarCollapse notebooks={notebooks} tags={tags} onSearch={onSearch}/>
        </div>
        <div className="col-md-9 col-xs-12">
          <NotesContainer notes={notes} onDelNote={onDelNote} onSelectNote={onSelectNote}/>
        </div>
      </div>
    </div>
  );
}

export default AsideNotes;
