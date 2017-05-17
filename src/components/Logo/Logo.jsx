import React from 'react';
import './Logo.scss';

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="logo-container">
            <div className="logo">
                <img src="../src/components/header/img/NotieLogo.png" alt=""/>
            </div>
        </div>
        )}
}

export default Logo;
