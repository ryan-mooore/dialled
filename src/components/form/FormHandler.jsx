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
        ridingStyle: 50,
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
        (completedPreliminary ? <MainForm preliminaryValues={formEntries}/> : <Preliminary TrailType={TrailType} onChange={handleFormChange} handleNext={handleNext} values={formEntries} />)
    )
};

export default FormHandler;

const Main = () => (<h1>main formy bit</h1>)