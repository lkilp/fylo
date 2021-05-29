import React from 'react';
import './StayProductive.scss';

const StayProductive = () => {
    return(
        <div className="StayProductive">
            <div className="left"></div>
            <div className="right">
                <div className="stay-productive-title">
                    <h2>Stay productive,&nbsp;</h2>
                <h2>wherever you are</h2>
                </div>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
                <div className="more-info">
                    <a href='/'>See how Fylo works<div className="arrow"></div></a>    
                </div>
            </div>
        </div>
    )
}
export default StayProductive;