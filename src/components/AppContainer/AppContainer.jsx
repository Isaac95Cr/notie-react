import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);
        this.handleToggleAddPanel = this.handleToggleAddPanel.bind(this);
        this.state = { isAsideVisible: false, isAddPanelVisible: false }
    }

    handleToggleAside() {
        this.setState(({ isAsideVisible }) => ({ isAsideVisible: !isAsideVisible }));
    }

    handleToggleAddPanel(){
        this.setState(({ isAddPanelVisible }) => ({isAddPanelVisible: !isAddPanelVisible }));
    }

    render() {
      const { handleToggleAside,handleToggleAddPanel, state } = this;
      const { isAsideVisible, isAddPanelVisible } = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAddPanel = {handleToggleAddPanel} toggleAside = {handleToggleAside} />
            <MainSection isAsideVisible = {isAsideVisible} isAddPanelVisible = {isAddPanelVisible}/>
        </div>
      )
    }
}

export default AppContainer;
