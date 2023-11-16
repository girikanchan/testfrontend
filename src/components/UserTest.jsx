import React from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    rating: 5,
    quote: "I just wanted to share a quick note and let you know that you guys do a really good job...",
    author: "CEO of ABC Company"
  },
  {
    rating: 5,
    quote: "I just wanted to share a quick note and let you know that you guys do a really good job...",
    author: "CEO of ABC Company"
  },
  {
    rating: 1,
    quote: "I just wanted to share a quick note and let you know that you guys do a really good job...",
    author: "CEO of ABC Company"
  },
  {
    rating: 5,
    quote: "I just wanted to share a quick note and let you know that you guys do a really good job...",
    author: "CEO of ABC Company"
  },
  
];

function UserTest() {
  return (
    <div>
      {/* Other components */}
      <Testimonial testimonials={testimonialsData} />
    </div>
  );
}

export default UserTest;
