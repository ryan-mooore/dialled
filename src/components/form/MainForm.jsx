import '../../css/main-form.css'

import React, { useEffect, useState, Component } from 'react';

const MainForm = () => {

    const [formEntries, setFormEntries] = useState({
        isTubeless: false,
        tyreWidth: 2.4,
    });

    const handleFormChange = (key, value) => {
        setFormEntries({
            ...formEntries,
            [key]: value
        })
    }

    return (
        <div>

        <form>
            <label for="isTubeless">Is Tubeless?</label>
            <input type="checkbox" onClick={(event) => handleFormChange("isTubeless", !formEntries.isTubeless)}/>

            <div class="form-slider">
                <label for="riding-style">Tyre width: </label>
                <input type="range" min="2.0" max="2.8" step="0.2" value={formEntries.tyreWidth} class="slider" id="slider" onClick={(event) => handleFormChange("tyreWidth", event.target.value)}/>
                <span>{formEntries.tyreWidth}</span>
            </div>

        </form>

        <hr></hr>
        <div>
            <h1>your reccommended psi:</h1>
                <div className="calculation">
                <h1>20</h1><span>psi</span>
            </div>
        </div>
        </div>
    )
}

export default MainForm;