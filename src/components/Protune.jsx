import React from 'react';
import '../css/info-pages.css'

const Protune = () => (
    <>
        <h1 className="header">Protune</h1>
        <div className="info-container">
            <div className="p">
            Unsatisfied with your own bike setup? Not sure whether this service worked for you? Need a professional to tune your bike for an upcoming race?
            </div>
            <div className="p">
            Find a YT-Industries trusted bike dealer near you to tune your bike exactly for your needs.
            </div>
            <div class="map-canvas">
                <iframe title="map-embed" width="900" height="500" src="https://maps.google.com/maps?q=bike%20repair&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    </>
)

export default Protune;