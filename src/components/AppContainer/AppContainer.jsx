import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';
import api from './../../../api/api';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);
        this.handleToggleAddNotebooks = this.handleToggleAddNotebooks.bind(this);
        this.handleToggleAddTags = this.handleToggleAddTags.bind(this);
        this.state = { 
            isAsideVisible: false,
            isAddNoteBooksVisible: false,
            isAddTagsVisible: false,
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

    handleToggleAside() {
        this.setState(({ isAsideVisible }) => ({ isAsideVisible: !isAsideVisible }));
    }

    handleToggleAddNotebooks(){
        this.setState(({ isAddNoteBooksVisible }) => ({isAddNoteBooksVisible: !isAddNoteBooksVisible }));
    }

    handleToggleAddTags(){
        this.setState(({ isAddTagsVisible }) => ({isAddTagsVisible: !isAddTagsVisible }));
    }

    render() {
      const { handleToggleAside,handleToggleAddNotebooks, handleToggleAddTags, state } = this;
      const { isAsideVisible, isAddTagsVisible, isAddNoteBooksVisible, notes, notebooks, tags} = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAddTags={handleToggleAddTags} toggleAddNotebooks = {handleToggleAddNotebooks} toggleAside = {handleToggleAside} />
            <MainSection 
            isAsideVisible = {isAsideVisible} 
            isAddNoteBooksVisible = {isAddNoteBooksVisible}
            isAddTagsVisible = {isAddTagsVisible} 
            notes={notes} 
            notebooks={notebooks} 
            tags={tags}/>
        </div>
      )
    }
}

export default AppContainer;
