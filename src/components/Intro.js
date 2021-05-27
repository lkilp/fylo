import React from 'react';
import './Intro.scss';

import waveBackground from '../assets/images/bg-curvy-desktop.svg';
import InfoBoxContainer from './InfoBoxContainer';

const Intro = () => {
    return(
        <div className="Intro">
            <div className="intro-text">
                <h1>All your files in one secure location, <br></br>accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever 
    you need, share and collaborate with friends family, and co-workers.</p>
                <button><a href="/">Get Started</a></button>
            </div>
            <img className="wave-background" src={waveBackground} alt="wave background"></img>
            <InfoBoxContainer />
        </div>
    )
}
export default Intro;