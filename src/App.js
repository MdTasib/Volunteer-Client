import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import AddEvents from "./components/AddEvents/AddEvents";
import Dasboard from "./components/Dasboard/Dasboard";

export default function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addEvents">Add Event</Link>
              </li>
              <li>
                <Link to="/dasboard">Dasboard</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addEvents">
              <AddEvents />
            </Route>
            <Route path="/dasboard">
              <Dasboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}