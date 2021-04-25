import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Users from "./screens/Users";
import Login from "./screens/Login";
import Register from './screens/Register'
export default function App() {
 //
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users/:user_id">
              <Users />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}


