import React from 'react';
import MainSection from '../../components/MainSection/MainSection';
import Header from '../../components/Header/Header';

class AppContainer extends React.Component{
    constructor(props){
        super(props);

        this.handleToggleAside = this.handleToggleAside.bind(this);

        this.state = {
            visible: false
        }
    }

    handleToggleAside(){
        this.setState(prev => ({ visible: !prev.visible }));
    }

    render(){
        return(
        <div className='app container-fluid'>
            <Header toggleAside = {this.handleToggleAside} />
            <MainSection visible = {this.state.visible}/>
        </div>
        )
    }
}

export default AppContainer;
