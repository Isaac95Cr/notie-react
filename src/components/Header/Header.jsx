import React from 'react';
import './Header.scss'
import Logo from '../../components/Logo/Logo'
import User from '../../components/UserButton/UserButton'
import MainMenu from '../../components/MainMenu/MainMenu'

class Header extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        const { toggleSlidePanel } = this.props;
        return(
            <header className="header-section container-fluid">
                <div className="row">
                    <div className="col-xs-2">
                        <Logo />
                    </div>
                    <div className="col-xs-8">
                        <MainMenu toggleSlidePanel = { toggleSlidePanel } />
                    </div>
                    <div className="col-xs-2">
                        <User />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
