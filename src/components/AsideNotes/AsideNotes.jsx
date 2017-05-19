import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavBarCollapse from '../../components/NavBarCollapse/NavBarCollapse';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import './AsideNotes.scss';

const AsideNotes = (props) => {
  return (
    <aside id="aside" className={'aside-notes container-fluid ' + (props.visible? 'active' : '') }>
      <NavBar />
      <div className="row">
          <div className="col-md-3">
            <NavBarCollapse />
          </div>
            <div className="col-md-9 col-xs-12">   
                <NotesContainer />
            </div>
        </div>
    </aside>
  )
}

export default AsideNotes;