import React from 'react';
import Button from './Button';
import './Island.scss';

const Island = () => {
    return(
        <div className="Island">
            <h3>Get early access today</h3>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
            <div className="enrollment">
                <div className="enrollment-entry">
                    <input type="email" className="email-input" pattern="[^ @]*@[^ @]*" required placeholder="email@example.com" ></input>
                    <Button title='Get Started For Free' buttonName='for-free-button'/> 
                </div>
                <p className="email-invalid">Please enter a valid email address</p>
            </div>
           
        </div>
    )
}
export default Island;