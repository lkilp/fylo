import React from 'react';
import './Button.scss';

const Button = (props) => {
    const { title, buttonName } = props;
    return(
        <button className={`Button ${buttonName}`} >
            <a href="/" >{title}</a>
        </button>
    )
}
export default Button;