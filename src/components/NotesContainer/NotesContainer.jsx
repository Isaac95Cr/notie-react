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

class NotesContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
      api.getAllNotes()
      .then(response => {
        const notes = response.data.notes;
        this.setState({notes});
      });
  }

  render(){
    return (
    <div className="row">
        <div className="notes-container">
            {displayNotes(this.state.notes)}
        </div>
    </div>
  );
  }
}

export default NotesContainer;
