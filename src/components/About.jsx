import React from 'react';
import '../css/info-pages.css'

const About = () => (
    <>
        <h1 className="header">About</h1>
        <div className="info-container">
            <div className="p">
                'dialed' is free service created by YT INDUSTRIES. This surevice has been made as a solution to help our customers
                to get their bikes purchased through <a href="https://yt-industries.com">yt-industries.com</a> tuned to the best settings possible.
                The YT MOB has created an algorithm that will calculate the perfect settings for your bike based on a number of options and inputs.
                This is so you can get the best riding experience for your purchase.
            </div>
            <div className="p">
                Currently only calculating tyre pressure is available to users of this site, however more features will be coming soon, such as 
                suspension tuning. Keep coming back to see updates!
            </div>
            <div className="p">
                If you have any queries or concerns about the website and its contens, please do not hesitate to contact the developer lead of
                the website, <a href="mailto:moorera18@cashmere.school.nz">Ryan Moore</a>. Thank you for using 'dialed', a YT service!
            </div>
        </div>
    </>
)

export default About;