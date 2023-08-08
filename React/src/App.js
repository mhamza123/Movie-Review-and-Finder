import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import AllMovies from './components/AllMovies.js';
import Movie from './components/Movie.js';
import Footer from './components/Footer.js';
import AddReview from './components/AddReview.js';
import About from './components/About.js';
import Search from './components/Search.js';
const UsernameContext = React.createContext('');

const App = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  return (
    <UsernameContext.Provider value={username}>
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                  {username ? <Redirect to="/home" /> : <Redirect to="/login" />}
                </Route>
              <Route exact path="/login">
                {username ? <Redirect to="/home" /> : <Login onLogin={updateUsername} />}
              </Route>
              <div>
                <Navbar username={username} onLogout={() => updateUsername('')} />
                <Route exact path="/home">
                  {username ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/about"> <About/> </Route>
                <Route exact path="/browse" > <AllMovies/> </Route>
                <Route exact path="/movie/:movie_id/add-review"><AddReview username= {username}/></Route>
                <Route exact path="/movie/:id"><Movie></Movie></Route>
                <Route exact path="/search/:query"><Search></Search></Route>
                <Footer />

              </div>
            </Switch>
          </div>
        </div>
      </Router>
    </UsernameContext.Provider>
  );
};

export default App;
