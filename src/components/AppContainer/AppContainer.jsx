import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';
import api from './../../../api/api';

const getFilteredList = (list, attributes = [], query) => {
  return list.filter(item => getStringToSearch(attributes, item).toLowerCase().indexOf(query.toLowerCase()) >= 0)
}

const getStringToSearch = (keys, obj) => keys.reduce(((result, key) => `${result} ${obj[key]}`), '');

const getNewlist = (list, id) => list.filter( item => item._id !== id );

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleSlidePanel = this.handleToggleSlidePanel.bind(this);
        this.handleOnNoteSearch = this.handleOnNoteSearch.bind(this);
        this.handleOnNotebookSearch = this.handleOnNotebookSearch.bind(this);
        this.handleOnTagSearch = this.handleOnTagSearch.bind(this);
        this.handleDelNote = this.handleDelNote.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.state = {
            visiblePanel: "",
            notes : [],
            completeNoteList: [],
            notebooks : [],
            completeNotebookList: [],
            tags : [],
            completeTagList: []
        }
    }

    componentDidMount() {
        api.getAllNotes().then(res => this.setState({ notes: res.data, completeNoteList: res.data }));
        api.getAllNoteBooks().then(res => this.setState({ notebooks: res.data, completeNotebookList: res.data }));
        api.getAllTags().then(res => this.setState({ tags: res.data, completeTagList: res.data }));
    }

    handleToggleSlidePanel(e) {
        if(e.currentTarget.nodeName == "BUTTON"){
            e.stopPropagation();
            const panel = e.currentTarget.id;
            const { setState, state } = this;
            panel !== state.visiblePanel ? this.setState({ visiblePanel: panel }) : this.setState({ visiblePanel: "" });
        }
    }

    handleDelNote(e) {
        const { notes, completeNoteList} = this.state;
        if(e.currentTarget.nodeName == "BUTTON"){
            e.stopPropagation();
            const noteId = e.currentTarget.id;
            api.delNote(noteId)
            .then((res) => {
              const newList = getNewlist(completeNoteList,noteId);
              console.log(newList);
              this.setState({ notes : newList, completeNoteList: newList});
            }).catch((err) => {
              console.log(err)
            })
          }
    }

    handleOnNoteSearch(e) {
      const query = e.target.value.toLowerCase();
      const { completeNoteList } = this.state;
      const filteredList = getFilteredList(completeNoteList, ['text', 'title'], query);
      this.setState({ notes: filteredList });
    }

    handleOnTagSearch(e) {
      const query = e.target.value.toLowerCase();
      const { completeTagList } = this.state;
      const filteredList = getFilteredList(completeTagList, ['name'], query);
      this.setState({ tags: filteredList });
    }

    handleOnNotebookSearch(e) {
      const query = e.target.value.toLowerCase();
      const { completeNotebookList } = this.state;
      const filteredList = getFilteredList(completeNotebookList, ['name'], query);
      this.setState({ notebooks: filteredList });
    }

    handleAddNote(note) {
      this.setState(({completeNoteList, notes}) => ({
        completeNoteList: [...completeNoteList, note],
        notes: [...notes, note]
      }))
    }

    render() {
      const { handleToggleSlidePanel, handleOnNoteSearch, handleOnNotebookSearch, handleOnTagSearch, handleAddNote,  handleDelNote } = this;
      const { visiblePanel, notes, notebooks, tags, completeTagList, completeNotebookList} = this.state;
      return (
        <div className='app container-fluid'>
            <Header toggleSlidePanel = {handleToggleSlidePanel} />
            <MainSection
              notes={notes}
              notebooks={notebooks}
              tags={tags}
              allTags={completeTagList}
              allNotebooks={completeNotebookList}
              visiblePanel = {visiblePanel}
              onNoteSearch = {handleOnNoteSearch}
              onNotebookSearch = {handleOnNotebookSearch}
              onTagSearch = {handleOnTagSearch}
              onDelNote = {handleDelNote}
              onAddNote = {handleAddNote}
            />
        </div>
      )
    }
}

export default AppContainer;
