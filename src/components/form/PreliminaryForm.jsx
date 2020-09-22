import React from 'react';

const Preliminary = props => (
        <form>
            <div className="trail-type">
                {
                Object.entries(props.TrailType).map(([key, value]) => (
                <div className="form-radios">
                    <input type="radio" key={key} name="trail-type" onClick={(event) => props.onChange(event, "trailType", key)} checked={console.log(props.values.trailType)}/>
                    <img src="" alt=""></img>
                    <label for={key}>{value}</label>
                </div>))
                }
            </div>

            <div className="weight-container">
                <div className="form-text">
                    <label for="rider-weight">Rider weight: </label>
            <input type="text" value={props.values.riderWeight} onChange={(event) => props.onChange(event, "riderWeight", event.target.value)} />
                </div>
                <div className="form-text">
                    <label Formfor="bike-weight">Bike weight: </label>
                    <input type="text" value={props.values.bikeWeight} onChange={(event) => props.onChange(event, "bikeWeight", event.target.value)} />
                </div>
            </div>

            <div className="form-slider">
                <label for="riding-style">Riding style: </label>
                <input type="range" min="1" max="100" value={props.values.ridingStyle} className="slider" id="slider" onChange={(event) => props.onChange(event, "ridingStyle", event.target.value)}/>
            </div>
            
            <div className="form-button">
                <button onClick={(event) => props.handleNext(event) ? props.history.push("/results"): null }>next</button>
            </div>
            
        </form>
    )

export default Preliminary;