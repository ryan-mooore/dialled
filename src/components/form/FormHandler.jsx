import React, { useEffect, useState, Component } from 'react';
import Preliminary from './PreliminaryForm';
import MainForm from './MainForm'
import { useHistory, Route } from "react-router-dom";

const FormHandler = () => {

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
        ridingStyle: 50,
    });
    
    const [completedPreliminary, setPreliminary] = useState(null);

    const handleFormChange = (key, value) => {
        setFormEntries({
            ...formEntries,
            [key]: value
        })
    }
    
    const history = useHistory();

    const handleNext = (event) => {


        event.preventDefault()
        for (const [key, value] of Object.entries(formEntries)) {
            if (value == null) {
                setPreliminary(false);
                return;
            }
        }
        
        return (
            <Route
            path='/dashboard'
            render={(props) => (
                <MainForm {...props} preliminaryValues={formEntries} />
            )} />
        );
    }
    return ("n");
};

export default FormHandler;

const Main = () => (<h1>main formy bit</h1>)