import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';;

function NavBar() {
  return (

    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/login">Login</Link>
    </div>

  )
}

export default NavBar;
