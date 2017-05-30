import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';
import api from './../../../api/api';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);
        this.handleToggleAddPanel = this.handleToggleAddPanel.bind(this);
        
        this.state = { 
            isAsideVisible: false,
            isAddPanelVisible: false,
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

    handleToggleAddPanel(){
        this.setState(({ isAddPanelVisible }) => ({isAddPanelVisible: !isAddPanelVisible }));
    }

    render() {
      const { handleToggleAside,handleToggleAddPanel, state } = this;
      const { isAsideVisible, isAddPanelVisible, notes, notebooks, tags} = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAddPanel = {handleToggleAddPanel} toggleAside = {handleToggleAside} />
            <MainSection 
            isAsideVisible = {isAsideVisible} 
            isAddPanelVisible = {isAddPanelVisible} 
            notes={notes} 
            notebooks={notebooks} 
            tags={tags}/>
        </div>
      )
    }
}

export default AppContainer;
