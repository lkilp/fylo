import React from 'react';
import './Navigation.scss';

import fyloLogo from '../assets/images/logo.svg';

const Navigation = () => {
    return(
        <div className="Navigation">
            <img src={fyloLogo} alt="logo"/>
            <div className="navigation-links">
                <a href="/">Features</a>
                <a href="/">Team</a>
                <a href="/">Sign In</a>
            </div>
        </div>
    )
}
export default Navigation;