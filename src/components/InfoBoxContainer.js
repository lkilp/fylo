import React from 'react';
import InfoBox from './InfoBox';
import './InfoBoxContainer.scss';

import accessAnywhereIcon from '../assets/images/icon-access-anywhere.svg';
import securityIcon from '../assets/images/icon-security.svg';
import collaborationIcon from '../assets/images/icon-collaboration.svg';
import anyFileIcon from '../assets/images/icon-any-file.svg';

const InfoBoxContainer = () => {
    return(
        <div className="InfoBoxContainer">
            <div className="info-box-grid">
                <InfoBox pictureSource={accessAnywhereIcon} 
                     pictureDescription='access anywhere icon' 
                     title='Access your files, anywhere'
                     description='The ability to use a smartphone, tablet, or computer to access your account means your 
                     files follow you everywhere.'/>
                <InfoBox pictureSource={securityIcon} 
                     pictureDescription='security icon' 
                     title='Security you can trust'
                     description=' 2-factor authentication and user-controlled encryption are just a couple of the security 
                     features we allow to help secure your files.'/>
                <InfoBox pictureSource={collaborationIcon} 
                     pictureDescription='collaboration icon' 
                     title='Real-time collaboration'
                     description='Securely share files and folders with friends, family and colleagues for live collaboration. 
                     No email attachments required.'/>
                <InfoBox pictureSource={anyFileIcon} 
                     pictureDescription='any file icon' 
                     title=' Store any type of file'
                     description='Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all 
                     file types to be securely stored and shared.'/>
            </div>
            
        </div>
    )
}
export default InfoBoxContainer;