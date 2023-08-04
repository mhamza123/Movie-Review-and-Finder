import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ username, onLogout }) => { // Step 1: Receive the onLogout prop
  const firstLetter = username ? username.charAt(0).toUpperCase() : "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory(); // Step 2: Use useHistory to handle redirection

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    history.push('/login');
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={handleToggleMenu}>
        <a><img src="/hamburger.png" ></img></a>
      </div>
      <div className={`links ${isMenuOpen ? "show" : ""}`}>
        <Link to="/home" onClick={handleToggleMenu}>Home</Link>
        <Link to="/browse" onClick={handleToggleMenu}>All Movies</Link>
        <Link to="/about" onClick={handleToggleMenu}>About</Link>
      </div>
     
      <div className="userinfo">
      <div className="search-bar">
        <input type="text" placeholder="Search Movies" />
        <button>Search</button>
      </div>
        <Link to={`/update-profile/${username}`}>{username}</Link>
        <div className="profile-circle">{firstLetter}</div>
        <button className="logout-btn" onClick={handleLogout}> Logout </button>
      </div>
    </nav>
  );
};

export default Navbar;
