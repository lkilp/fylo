import React from 'react';
import './InfoBox.scss';


const InfoBox = (props) => {
    const { pictureSource, pictureDescription, title, description } = props
    return(
        <div className="InfoBox">
            <img src={pictureSource} alt={pictureDescription}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default InfoBox;