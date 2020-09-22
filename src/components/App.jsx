import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import '../css/App-Navbar.css';
import '../css/App.css';
import MainForm from './form/MainForm';
import Preliminary from './form/PreliminaryForm';
import NotFound from './NotFound';


const App = () => {

  const TrailType = {
    TECH: "tech",
    FREERIDE: "freeride",
    FLOW: "flow",
    UNDULATING: "undulating",
    URBAN: "urban"
  }
  
  const [formEntries, setFormEntries] = useState({
    trailType: TrailType.FLOW,
    riderWeight: undefined,
    bikeWeight: undefined,
    ridingStyle: 50,
  });

  const handleFormChange = (event, key, value) => {
    setFormEntries({
      ...formEntries,
      [key]: value
    })
  }

  const handleNext = (event) => {
    event.preventDefault()
    for (const property in formEntries) {
      if (formEntries[property] === undefined || formEntries[property] === "") {
        return false;
      }
    }
    return true;
    
  }

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
          
          <Route path="/results" render={(props) => (<MainForm {...props}
            preliminaryValues  ={formEntries}
            TrailType          ={TrailType}
          />)}/>
          
          <Route exact path="/" render={(props) => (<Preliminary {...props}
            values             ={formEntries}
            TrailType          ={TrailType}
            onChange           ={handleFormChange}
            handleNext         ={handleNext}
          />)} />

          <Route path="/about" component={About} />
          <Route path="/protune" component={Protune} />
          <Route component={NotFound} />

        </Switch>
      </Router>
    </div>
  );
}

const About = () => (<h2>About</h2>);

const Protune = () => (<h2>Protune</h2>);

export default App;