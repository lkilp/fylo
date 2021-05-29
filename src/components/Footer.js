import React from 'react';
import './Footer.scss';

import fyloLogo from '../assets/images/logo.svg';
import locationIcon from '../assets/images/icon-location.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Island from './Island';


const Footer = () => {
    return(
        <div className="Footer">
            <div className="island-holder">
                <Island />
            </div>
            <div className="footer-content">
                <img className="logo" src={fyloLogo} alt="logo"></img>
                <div className="footer-info">
                    <div className="address">
                        <img className="location icon" src={locationIcon} alt="location icon"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua</p>
                    </div>
                    <div className="contact">
                        <img className="phone icon" src={phoneIcon} alt="phone icon"></img>
                        <p>+1-543-123-4567</p>
                        <img className="email icon" src={emailIcon} alt="email icon"></img>
                        <p>example@fylo.com</p>
                    </div>
                    <div className="more-info">
                        <div className="more-info-left">
                            <a href='/'>About Us</a>
                            <a href='/'>Jobs</a>
                            <a href='/'>Press</a>
                            <a href='/'>Blog</a>
                        </div>
                        <div className="more-info-right">
                            <a href='/'>Contact Us</a>
                            <a href='/'>Terms</a>
                            <a href='/'>Privacy</a>
                        </div>
                    </div>
                    <div className="symbols">
                        <div className="circle"><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className="circle"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="circle"><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;