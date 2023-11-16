import React from 'react';
import './testimonial.css';

function TestimonialCard({ rating, quote, author }) {
  return (
    <div className='cardsTest'>
      <p>{Array.from({ length: rating }, (_, index) => <span key={index}>⭐</span>)}</p>

      <h4>"A Great Find"</h4>
      <p>{quote}</p>
      <h5>{author}</h5>
    </div>
  );
}

function Testimonial({ testimonials }) {
  return (
    <div className='testimonial'>
      <div className='testimonial-container'>
        <h3>TESTIMONIALS</h3>
        <hr></hr>
        <p>What People are Saying</p>
      </div>
      <div className='testimonial-cards'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
