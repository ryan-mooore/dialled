import React, { useEffect, useState, Component } from 'react';
import '../css/App.css';
import '../css/App-Navbar.css'
import Form from './Form'
import NotFound from './NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Router>
        <Link to="/">
          <div className="central-header">
            <h1 className="heading">dialed</h1>
            <h2 className="subheading">dial in your bike.</h2>
          </div>
        </Link>
        <nav>
          <div className="logo"></div>
          <div className="links">
            <Link to="/about">about</Link>
            <Link to="/protune">protune</Link>
            <a href="https://yt-industries.com">yt-industries.com</a>
          </div>
        </nav>

        <Switch>
          <Route path="/about"    component={About} />
          <Route path="/protune"  component={Protune} />
          <Route exact path="/"   component={Form} />
          <Route path             component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const About = () => (<h2>About</h2>);

const Protune = () => (<h2>Protune</h2>);

export default App;