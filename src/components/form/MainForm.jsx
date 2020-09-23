import React, { useState } from 'react';
import '../../css/main-form.css';

const MainForm = (props) => {

    const [formEntries, setFormEntries] = useState({
        isTubeless: true,
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
        let tubesAdditor = widthMultiplier * 4; //adds 2 psi if fat bike up to 5-6 psi if running at around 20
        let tubedPSI = weightBasedPSI + tubesAdditor;

        let finalRearPSI = formEntries.isTubeless ? weightBasedPSI : tubedPSI

        let finalFrontPSI = finalRearPSI - (finalRearPSI < 50 ? (1.04 ** finalRearPSI) : 7);

        return [Math.round(finalFrontPSI), Math.round(finalRearPSI)];
    }

    return (
        <div>
            <form>
                <div className="form-entry">
                    <label htmlFor="isTubeless">tubeless</label>
                    <div className="form-entry-content">
                        <div className="switch">
                            <div className="switch-slider" style={{"align-self": "flex-start"}} onClick={(event) => {
                                event.target.style["align-self"] = (event.target.style["align-self"] === "flex-start" ? "flex-end" : "flex-start");
                                handleFormChange("isTubeless", !formEntries.isTubeless);
                                }}>
                                    <label>{formEntries.isTubeless? "tubeless" : "tubes"}</label>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="form-entry">
                    <label htmlFor="tyre-width">tyre width</label>
                    <div className="form-entry-content">
                        <input className="tyre-width-slider" type="range" min="2.0" max="4.0" step="0.1" value={formEntries.tyreWidth} onChange={(event) => handleFormChange("tyreWidth", event.target.value)} />
                    </div>
                </div>
                    <div className="tyre-width-label">{formEntries.tyreWidth} inches</div>

            </form>

                <h1 className="results-header">we recommend</h1>
                <div className="results-container">
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
    )
}

export default MainForm;