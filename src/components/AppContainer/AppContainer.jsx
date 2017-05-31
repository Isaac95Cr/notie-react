import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';
import api from './../../../api/api';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);

        this.state = { 
            visiblePanel: "",
            notes : [],
            notebooks : [],
            tags : []
        }
    }

    componentDidMount() {
        api.getAllNotes()
        .then(response => {
        const data = response.data;
        this.setState({notes:data});
        });
        api.getAllNoteBooks()
        .then(response => {
        const data = response.data;
        this.setState({notebooks:data});
        });
        api.getAllTags()
        .then(response => {
        const data = response.data;
        this.setState({tags:data});
        });
    }

    handleToggleAside(event) {
        if(event.currentTarget.nodeName == "BUTTON"){
            event.stopPropagation();
            const panel = event.currentTarget.id;
            panel !== this.state.visiblePanel ? 
            this.setState(({visiblePanel:panel})) :
            this.setState(({visiblePanel:""}));
        }
    }

    render() {
      const { handleToggleAside,handleToggleAddNotebooks, handleToggleAddTags, state } = this;
      const { visiblePanel, isAsideVisible, isAddTagsVisible, isAddNoteBooksVisible, notes, notebooks, tags} = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAddTags={handleToggleAddTags} toggleAddNotebooks = {handleToggleAddNotebooks} toggleAside = {handleToggleAside} />
            <MainSection 
            isAsideVisible = {isAsideVisible} 
            isAddNoteBooksVisible = {isAddNoteBooksVisible}
            isAddTagsVisible = {isAddTagsVisible} 
            notes={notes} 
            notebooks={notebooks} 
            tags={tags}
            visiblePanel = {visiblePanel}/>
            
        </div>
      )
    }
}

export default AppContainer;
