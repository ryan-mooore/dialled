import React, { useState } from 'react';
import '../../css/main-form.css';

const MainForm = (props) => {

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

    // redirect back to / if the user has not submitted form
    for (const property in props.preliminaryValues) {
        if (props.preliminaryValues[property] === undefined) {
            props.history.push("/");
        }
    }

    const algorithm = (preliminaryFormEntries, formEntries) => {
        let weight = parseInt(preliminaryFormEntries.bikeWeight) + parseInt(preliminaryFormEntries.riderWeight);
        let width = parseFloat(formEntries.tyreWidth)

        let basePSI = 1.5 * (7 + weight / 10) - 1; //base psi for a 2.5 width tyre based on weight
        let widthMultiplier = -0.4 * width + 2; //adds psi if tyre is thinner, lowers to about 8 if tyre is ~4.0 fat bike
        let weightBasedPSI = basePSI * widthMultiplier;
        let tubesAdditor = widthMultiplier * 5; //adds 2 psi if fat bike up to 5-6 psi if running at around 20
        let tubedPSI = weightBasedPSI + tubesAdditor;

        let finalRearPSI = formEntries.isTubeless ? weightBasedPSI : tubedPSI

        let finalFrontPSI = finalRearPSI - (finalRearPSI < 50 ? (1.04 ** finalRearPSI) : 7);

        return [Math.round(finalFrontPSI), Math.round(finalRearPSI)];
    }

    return (
        <div>
            <form>
                <div className="form-entry">
                    <label htmlFor="isTubeless">Is Tubeless?</label>
                    <div className="form-entry-content">
                        <input type="checkbox" onClick={(event) => handleFormChange("isTubeless", !formEntries.isTubeless)} />
                    </div>
                </div>

                <div className="form-entry">
                    <label htmlFor="tyre-width">Tyre width: </label>
                    <div className="form-entry-content">
                        <input className="tyre-width-slider" type="range" min="2.0" max="4.0" step="0.1" value={formEntries.tyreWidth} onChange={(event) => handleFormChange("tyreWidth", event.target.value)} />
                    </div>
                    <span>{formEntries.tyreWidth}</span>
                </div>

            </form>

            <hr></hr>
            <div>
                <h1>your recommended psi:</h1>
                <div className="calculation">
                    <div className="psi-value">
                        <div className="number">{algorithm(props.preliminaryValues, formEntries)[1]}</div>
                        <div className="info">rear PSI</div>
                    </div>
                    <div className="psi-value">
                        <div className="number">{algorithm(props.preliminaryValues, formEntries)[0]}</div>
                        <div className="info">front PSI</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForm;