import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavBarCollapse from '../../components/NavBarCollapse/NavBarCollapse';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import api from './../../../api/api';
import './AsideNotes.scss';

class AsideNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      notebooks: [],
      tags: []
    };
  }

  componentDidMount() {
    api.getAllNotes()
    .then(response => {
      const data = response.data;
      this.setState(data);
    });
    api.getAllNoteBooks()
    .then(response => {
      const data = response.data;
      this.setState(data);
    });
    api.getAllTags()
    .then(response => {
      const data = response.data;
      this.setState(data);
    });
  }

  render() {
    const { notes, notebooks, tags } = this.state;
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
    )
  }
}

export default AsideNotes;
