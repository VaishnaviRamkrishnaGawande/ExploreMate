import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ExploreMate</div>
      <div className="nav-links">
        {/* <a href="#explore">Explore</a>
        <a href="#mate">Mate</a> */}
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login" className="login">Login</a>
        <a href="#signup" className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;