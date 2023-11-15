import React from 'react';
import './about.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="restaurant-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Only Quality Food</h1>
        <p>Savor exquisite flavors with our culinary masterpieces. Indulge in a symphony of taste with our diverse menu crafted from the finest ingredients. Immerse yourself in a warm and inviting ambiance, where every dish tells a story. Elevate your dining experience with our attentive service and stylish surroundings. Join us for a culinary journey that transcends the ordinary.</p>
        <div className="buttons">
          <button id='menu'>VIEW MENU</button>
          <button id='rtable'>RESERVATION</button>
        </div>
      </div>
    </div>
  );
};

export default About;
