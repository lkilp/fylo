import React from 'react';
import './Testimonial.scss';


const Testimonial = (props) => {
    const { testimonial, name, pictureSource, position } = props;
    return(
        <div className="Testimonial">
            <h4>{testimonial}</h4>
            <div className="person">
                <img className="profile-picture" alt={name} src={pictureSource}></img>
                <div className="person-info">
                    <h5>{name}</h5>
                    <h6>{position}</h6>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;