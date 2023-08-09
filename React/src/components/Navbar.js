import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import useFetch from "./useFetch";

const Navbar = ({ username, onLogout }) => {
  const firstLetter = username ? username.charAt(0).toUpperCase() : "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]); // State to store the list of movies
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const history = useHistory();

  const { error, isPending, data: moviesData } = useFetch('http://localhost:8000/movie');

  useEffect(() => {
    if (moviesData) {
      setMovies(moviesData);
    }
  }, [moviesData]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    history.push('/login');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const query = e.target.value.toLowerCase();

    const matchingSuggestions = movies.filter(movie =>
      movie.name.toLowerCase().includes(query)
    );
    setSearchSuggestions(matchingSuggestions.map(movie => movie.name));
  };
  

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={handleToggleMenu}>
        <a><img src="/hamburger.png" alt="Hamburger" /></a>
      </div>
      <div className={`links ${isMenuOpen ? "show" : ""}`}>
        <Link to="/home" onClick={handleToggleMenu}>Home</Link>
        <Link to="/browse" onClick={handleToggleMenu}>All Movies</Link>
        <Link to="/about" onClick={handleToggleMenu}>About</Link>
      </div>
     
      <div className="userinfo">
        <div className="search-bar">
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`/search/${searchQuery}`);
            setSearchQuery("");
          }}>
            <input
              type="text"
              placeholder="Search Movies"
              value={searchQuery}
              onChange={handleSearch}
              list="searchSuggestions"
            />
            <datalist id="searchSuggestions">
              {searchSuggestions.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
            <button onClick={() => history.push(`/search/${searchQuery}`)}>Search</button>
          </form>
        </div>
        <Link to={`/update-profile/${username}`}>{username}</Link>
        <div className="profile-circle">{firstLetter}</div>
        <button className="logout-btn" onClick={handleLogout}> Logout </button>
      </div>
    </nav>
  );
};

export default Navbar;
