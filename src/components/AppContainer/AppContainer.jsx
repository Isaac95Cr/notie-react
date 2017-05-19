import React from 'react';
import MainSection from '../../components/MainSection/MainSection';
import Header from '../../components/Header/Header';

class AppContainer extends React.Component{
    constructor(props){
        super(props);

        this.toggleAside = this.toggleAside.bind(this);

        this.state = {
            visible: false
        }
    }

    toggleAside(){
        this.setState(prev => ({visible: !prev.visible}) );
        alert(this.state.visible);
    }

    render(){
        return(
        <div className='app container-fluid'>
            <Header toggleAside = {this.toggleAside} />
            <MainSection visible = {this.state.visible}/>
        </div>
        )
    }
}

export default AppContainer;