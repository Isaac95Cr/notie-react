import React from 'react';
import Note from '../../components/Note/Note'

const NotesContainer = () => {
  return (
    <div className="notes-container">
        <div className="row">
            <div className="col-sm-4 col-xs-12">
                <Note />
            </div>
            <div className="col-sm-4 col-xs-12">
                <Note />
            </div>
            <div className="col-sm-4 col-xs-12">
                <Note />
            </div>
            <div className="col-sm-4 col-xs-12">
               <Note />
            </div>
        </div>
    </div>
  );
};

export default NotesContainer;
