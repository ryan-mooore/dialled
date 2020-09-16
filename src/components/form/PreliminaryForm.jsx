import React, { useEffect, useState, Component } from 'react';

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
            <input type="text" value={props.values.riderWeight} onChange={(event) => props.onChange("riderWeight", event.target.value)} />
                </div>
                <div class="form-text">
                    <label Formfor="bike-weight">Bike weight: </label>
                    <input type="text" value={props.values.bikeWeight} onChange={(event) => props.onChange("bikeWeight", event.target.value)} />
                </div>
            </div>

            <div class="form-slider">
                <label for="riding-style">Riding style</label>
                <input type="range" min="1" max="100" value={props.values.ridingStyle} class="slider" id="slider" onChange={(event) => props.onChange("ridingStyle", event.target.value)}/>
            </div>
            
            <button onClick={(event) => props.handleNext(event)}>next</button>
        </form>
    )
}

export default Preliminary;