import React from 'react'
import './UserButton.scss'

class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="user-photo-container">
                <div className="user-photo">
                    <img src="../src/components/Header/img/tyrion.jpg" alt=""/>
                </div>
            </div>
        )
    }

}
export default User;
