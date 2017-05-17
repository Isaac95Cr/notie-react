import React from 'react'
import './User.scss'

class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="user-photo-container">
                <div className="user-photo">
                    <img src="../src/components/header/img/tyrion.jpg" alt=""/>
                </div>
            </div>
        )
    }

}
export default User;
