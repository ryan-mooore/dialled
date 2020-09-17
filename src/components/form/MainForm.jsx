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
    for (const [_, value] of Object.entries(props.preliminaryValues)) {
      if (value === undefined) {
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

        let finalFrontPSI = finalRearPSI - (1.04 ** finalRearPSI);

        return [Math.round(finalFrontPSI), Math.round(finalRearPSI)];
    }

    return (
        <div>
            <form>
                <div className="form-checkbox">
                    <label htmlFor="isTubeless">Is Tubeless?</label>
                    <input type="checkbox" onClick={(event) => handleFormChange("isTubeless", !formEntries.isTubeless)} />
                </div>

                <div className="form-slider">
                    <label htmlFor="riding-style">Tyre width: </label>
                    <input type="range" min="2.0" max="4.0" step="0.1" value={formEntries.tyreWidth} className="slider" id="slider" onChange={(event) => handleFormChange("tyreWidth", event.target.value)} />
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