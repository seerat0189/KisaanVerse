import React from 'react';
import '../styles/Header.css';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="KisaanVerse Logo" className="logo-img" />
      KISAANVERSE
    </div>
    <div className="nav-tabs">
      <Link to="/"><a href="#home">Home</a></Link>
      <Link to="/marketplace"><a href="#market">Market</a></Link>
      <Link to="/chatbot"><a href="#ai-insights">AI Insights</a></Link>
      <Link to="/bid"><a href="#bid">Bid</a></Link>
      <Link to="/login"><a href="#login">Login</a></Link>
      <Link to="/marketplace"><a href="#dashboard">Dashboard</a></Link>
    </div>
  </nav>
);

export default Header;