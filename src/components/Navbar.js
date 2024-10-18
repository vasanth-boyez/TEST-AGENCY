import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#workflow">Our work flow</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="get-connected-btn">Get Connected</button>
    </nav>
  );
};

export default Navbar;
