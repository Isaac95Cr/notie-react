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
        api.getAllNotes().then(res => this.setState({ notes: res.data }));
        api.getAllNoteBooks().then(res => this.setState({ notebooks: res.data }));
        api.getAllTags().then(res => this.setState({ tags: res.data }));
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
      const { handleToggleAside, handleToggleAddNotebooks, handleToggleAddTags, state } = this;
      const { isAsideVisible, isAddTagsVisible, isAddNoteBooksVisible, notes, notebooks, tags} = state;
      return (
        <div className='app container-fluid'>
            <Header
              toggleAddTags={handleToggleAddTags}
              toggleAddNotebooks = {handleToggleAddNotebooks}
              toggleAside = {handleToggleAside}
            />
            <MainSection
              isAsideVisible = {isAsideVisible}
              isAddNoteBooksVisible = {isAddNoteBooksVisible}
              isAddTagsVisible = {isAddTagsVisible}
              notes={notes}
              notebooks={notebooks}
              tags={tags}
            />
        </div>
      )
    }
}

export default AppContainer;
