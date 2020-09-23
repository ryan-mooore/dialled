import React from 'react';
import "../../css/preliminary-form.css"

const Preliminary = props => (
    <>
        <form>
            <div className="form-section">
                <h1>Trail Type</h1>
                <div className="trail-type">{
                    Object.entries(props.TrailType).map(([key, value]) => (
                        <div 
                        key={key}
                        className="trail-type-button"
                        onClick={(event) => props.onChange(event, "trailType", value)}
                        check={props.values.trailType === value ? "checked" : undefined}
                        >
                            <img className="trail-type-icon" src={`/icons/${value}.svg`} alt={`Icon for trail type of ${value}`}></img>
                            <label htmlFor={key}>{value}</label>
                        </div>))
                }</div>
            </div>


            <div className="form-section">
                <h1>riding style</h1>
                <div className="riding-style">
                    <label htmlFor="riding-style">reserved</label>
                    <input type="range" min="1" max="100" value={props.values.ridingStyle} className="riding-style-slider" id="slider" onChange={(event) => props.onChange(event, "ridingStyle", event.target.value)} />
                    <label htmlFor="riding-style">aggressive</label>
                </div>
            </div>


            <div className="form-section">
                <h1>weight</h1>
                <div className="weight">
                    <label htmlFor="rider-weight">rider weight</label>
                    <input className="weight-input" type="text" value={props.values.riderWeight} onChange={(event) => props.onWeightChange(event, "riderWeight")} />
                    <label className="kg-label" htmlFor="rider-weight">kg</label>
                </div>
                <div className="weight">
                    <label htmlFor="bike-weight">bike weight</label>
                    <input className="weight-input" type="text" value={props.values.bikeWeight} onChange={(event) => props.onWeightChange(event, "bikeWeight")} />
                    <label className="kg-label" htmlFor="rider-weight">kg</label>
                </div>
            </div>

        </form>

        <div className="form-button" onClick={(event) => props.handleNext(event) ? props.history.push("/results") : null}>next</div>
    </>
)

export default Preliminary;