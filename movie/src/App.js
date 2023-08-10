import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js'
import Home from './Home.js'
import Navbar from './Navbar.js'
import '../static/css/App.css'


export default class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <div>
                <Navbar />
                <Route exact path="/home">
                  <Home />
                </Route>
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
