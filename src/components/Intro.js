import React from 'react';
import './Intro.scss';
import InfoBoxContainer from './InfoBoxContainer';
import Button from './Button';

const Intro = () => {
    return (
        <div className="Intro">
            <div className="intro-text">
                <h1>All your files in one secure location, <br></br>accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever
    you need, share and collaborate with friends family, and co-workers.</p>
                <Button title='Get Started' buttonName='get-started-button' />
            </div>
            <div className="wave-background"></div>
            <InfoBoxContainer />
        </div>
    )
}
export default Intro;