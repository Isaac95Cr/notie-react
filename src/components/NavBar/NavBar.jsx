import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
      <div className="navbar-section">
        <nav className="navbar navbar-default navbar-section">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                    <button className="navbar-brand">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;