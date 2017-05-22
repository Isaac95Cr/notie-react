import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavBarCollapse from '../../components/NavBarCollapse/NavBarCollapse';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import './AsideNotes.scss';

const AsideNotes = ({ isAsideVisible }) => {
  return (
    <div className='row'>
      <div className={`aside-notes ${ (isAsideVisible ? 'active-right' : '') }`}>
        <NavBar />
            <div className="col-md-3">
              <NavBarCollapse />
            </div>
            <div className="col-md-9 col-xs-12">
              <NotesContainer />
            </div>
      </div>
    </div>
  )
}

export default AsideNotes;
