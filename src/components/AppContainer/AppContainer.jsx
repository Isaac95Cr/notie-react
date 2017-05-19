import React from 'react';
import MainSection from './../MainSection/MainSection';
import Header from './../Header/Header';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleAside = this.handleToggleAside.bind(this);
        this.state = { isAsideVisible: false }
    }

    handleToggleAside() {
        this.setState(({ isAsideVisible }) => ({ isAsideVisible: !isAsideVisible }));
    }

    render() {
      const { handleToggleAside, state } = this;
      const { isAsideVisible } = state;
      return (
        <div className='app container-fluid'>
            <Header toggleAside = {handleToggleAside} />
            <MainSection isAsideVisible = {isAsideVisible} />
        </div>
      )
    }
}

export default AppContainer;
