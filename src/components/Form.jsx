import React, { useEffect, useState, Component } from 'react';
import Mainview from './Mainview';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Form = () => {

    const TrailType = {
        TECH: "tech",
        FREERIDE: "freeride",
        FLOW: "flow",
        UNDULATING: "undulating",
        URBAN: "urban"
    }

    const [formEntries, setFormEntries] = useState({
        trailType: null,
        riderWeight: null,
        bikeWeight: null,
    });
    
    const [completedPreliminary, setPreliminary] = useState(false);

    const handleFormChange = (key, value) => {
        setFormEntries({
            ...formEntries,
            [key]: value
        })
    }

    const handleNext = (event) => {
        event.preventDefault()
        for (const [key, value] of Object.entries(formEntries)) {
            if (value == null) return;
        }
        setPreliminary(true);
    }

    return (
        (completedPreliminary ? <Main /> : <Preliminary TrailType={TrailType} onChange={handleFormChange} handleNext={handleNext}/>)
    )
};

export default Form;

const Preliminary = (props) => {
    return (
        <form>
            <div class="trail-type">
                {
                Object.entries(props.TrailType).map(([key, value]) => (
                <div>
                    <input type="radio" key={key} name="trail-type" onClick={() => props.onChange("trailType", key)} />
                    <img src=""></img>
                    <label for={key}>{value}</label>
                </div>))
                }
            </div>

            <div class="weight-container">
                <div class="form-text">
                    <label for="rider-weight">Rider weight: </label>
                    <input type="text" onChange={(event) => props.onChange("riderWeight", event.target.value)}></input>
                </div>
                <div class="form-text">
                    <label for="bike-weight">Bike weight: </label>
                    <input type="text" onChange={(event) => props.onChange("bikeWeight", event.target.value)}></input>
                </div>

            </div>
            <div class="form-slider">
                <label for="riding-style">Riding style</label>
                <input type="range" min="1" max="100" value="50" class="slider" id="slider" />
           </div>
            
            <button onClick={(event) => props.handleNext(event)}>next</button>
        </form>
    )
}

const Main = () => (<h1>main formy bit</h1>)