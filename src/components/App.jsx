import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import '../css/navbar.css';
import MainForm from './form/MainForm';
import Preliminary from './form/PreliminaryForm';
import NotFound from './NotFound';
import About from './About';

const App = () => {

  const TrailType = {
    TECH: "tech",
    FREERIDE: "freeride",
    FLOW: "flow",
    CROSS_COUNTRY: "cross-country",
    URBAN: "urban"
  }
  
  const [formEntries, setFormEntries] = useState({
    trailType: TrailType.CROSS_COUNTRY,
    riderWeight: "",
    bikeWeight: "",
    ridingStyle: 50,
  });
  const handleFormChange = (event, key, value) => {
    setFormEntries({
      ...formEntries,
      [key]: value
    })
  }

  const handleWeightChange = (event, key) => {  
    if (Number(event.target.value) === 0 || event.target.value === "") {
      console.log("uhh")
      setFormEntries({
        ...formEntries,
        [key]: "" 
      })
      return;
    }

    if ((!isNaN(event.target.value) && (event.target.value < 1000 && event.target.value > 0))) {
      setFormEntries({
        ...formEntries,
        [key]: event.target.value
      })
    };
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
        <Link to="/" className="home-link">
          <nav>
          <div className="central-header">
            <h1 className="heading">dialed</h1>
            <h2 className="subheading">dial in your bike.</h2>
          </div>
          </nav>
        </Link>
        <Switch>
          
          <Route path="/results" render={(props) => (<MainForm {...props}
            preliminaryValues  ={formEntries}
            TrailType          ={TrailType}
          />)}/>
          
          <Route exact path="/" render={(props) => (<Preliminary {...props}
            values             ={formEntries}
            TrailType          ={TrailType}
            onWeightChange     ={handleWeightChange}
            onChange           ={handleFormChange}
            handleNext         ={handleNext}
          />)} />

          <Route path="/about" component={About} />
          <Route component={NotFound} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;