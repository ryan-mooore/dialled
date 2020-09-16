import React, { useEffect, useState, Component } from 'react';
import Preliminary from './PreliminaryForm';
import MainForm from './MainForm'

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
        ridingStyle: null,
    });
    
    const [completedPreliminary, setPreliminary] = useState(true);

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
        (completedPreliminary ? <MainForm /> : <Preliminary TrailType={TrailType} onChange={handleFormChange} handleNext={handleNext} values={formEntries} />)
    )
};

export default FormHandler;

const Main = () => (<h1>main formy bit</h1>)