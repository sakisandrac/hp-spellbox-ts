import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <img className="logo" src={logo}></img>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/mySpells">My Spells</Link>
        <Link className="nav-link" to="/allSpells">All Spells</Link>
      </div>
    </nav>
  )
}

export default Navigation