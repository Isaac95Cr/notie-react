import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';
import api from './../../../api/api';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleSlidePanel = this.handleToggleSlidePanel.bind(this);
        this.state = {
            visiblePanel: "",
            notes : [],
            originalNoteList: [],
            notebooks : [],
            originalNotebookList: [],
            tags : [],
            originalTagList: []
        }
    }

    componentDidMount() {
        api.getAllNotes().then(res => this.setState({ notes: res.data, originalNoteList: res.data }));
        api.getAllNoteBooks().then(res => this.setState({ notebooks: res.data, originalNotebookList: res.data }));
        api.getAllTags().then(res => this.setState({ tags: res.data, originalTagList: res.data }));
    }

    handleToggleSlidePanel(event) {
        if(event.currentTarget.nodeName == "BUTTON"){
            event.stopPropagation();
            const panel = event.currentTarget.id;
            panel !== this.state.visiblePanel ?
            this.setState(({visiblePanel:panel})) :
            this.setState(({visiblePanel:""}));
        }
    }

    handleOnNoteSearch(e) {
      const query = e.target.value;
      // TODO: Handle the note search
    }

    render() {
      const { handleToggleSlidePanel, state } = this;
      const { visiblePanel, notes, notebooks, tags} = state;
      return (
        <div className='app container-fluid'>
            <Header toggleSlidePanel = {handleToggleSlidePanel} />
            <MainSection
              notes={notes}
              notebooks={notebooks}
              tags={tags}
              visiblePanel = {visiblePanel}
            />
        </div>
      )
    }
}

export default AppContainer;
