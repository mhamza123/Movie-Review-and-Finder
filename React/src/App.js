import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js'
import Home from './Home.js'
import Navbar from './Navbar.js'

function App() {

  return (
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

export default App;