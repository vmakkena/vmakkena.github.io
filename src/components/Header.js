import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">Hallofire</div>
      </div>
      <div className="header-right">
        <div className="header-menu-item">Home</div>
        <div className="header-menu-item">About</div>
        <div className="header-menu-item">Services</div>
        <div className="header-menu-item">Contact</div>
      </div>
    </header>
  );
};

export default Header;
