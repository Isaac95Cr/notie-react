import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavBarCollapse from '../../components/NavBarCollapse/NavBarCollapse';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import './AsideNotes.scss';

const AsideNotes = ({notes, notebooks, tags })=> {
    return (
      <div className='row'>
        <div className="aside-notes">
          <NavBar />
              <div className="col-md-3">
                <NavBarCollapse notebooks={notebooks} tags={tags}/>
              </div>
              <div className="col-md-9 col-xs-12">
                <NotesContainer notes={notes} />
              </div>
        </div>
      </div>
    );
}

export default AsideNotes;
