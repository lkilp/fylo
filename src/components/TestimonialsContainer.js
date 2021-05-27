import React from 'react';
import Testimonial from './Testimonial';
import './TestimonialsContainer.scss';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';

const TestimonialsContainer = () => {
    return(
        <div className="TestimonialsContainer">
            <div className="testimonial-holder">
                <Testimonial testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.' 
                              name='Satish Patel' 
                              pictureSource={profile1} 
                              position='Founder &amp; CEO, Huddle'/>
                <Testimonial testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.'
                              name='Bruce McKenzie'
                              pictureSource={profile2}
                              position='Founder &amp; CEO, Huddle'/>
                <Testimonial testimonial='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.'
                              name='Iva Boyd'
                              pictureSource={profile3}
                              position='Founder &amp; CEO, Huddle'/>
            </div>
        </div>
    )
}
export default TestimonialsContainer;