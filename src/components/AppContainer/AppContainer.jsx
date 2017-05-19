import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);
        this.state = { visible: false }
    }

    handleToggleAside() {
        this.setState(prev => ({ visible: !prev.visible }));
    }

    render() {
      const { handleToggleAside, state } = this;
      const { visible } = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAside = {handleToggleAside} />
            <MainSection visible = {visible} />
        </div>
      )
    }
}

export default AppContainer;
