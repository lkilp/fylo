import React from 'react';
import './Header.scss';
import Navigation from './Navigation';
import illustrationIntro from '../assets/images/illustration-intro.png';

const Header = () => {
    return(
        <div className="Header">
            <Navigation />
            <div className='wave-background'></div>
            <img src={illustrationIntro} alt="intro illustration" className="intro-picture" >
            </img>
            
        </div>
    )
}
export default Header;