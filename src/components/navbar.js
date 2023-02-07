import React from 'react';
import './navbar'

function Navigation () {
  return (

    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Your Brand</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-menu-item">Home</div>
        <div className="navbar-menu-item">About</div>
        <div className="navbar-menu-item">Services</div>
        <div className="navbar-menu-item">Contact</div>
      </div>
    </nav>
  );
}

export default Navigation;