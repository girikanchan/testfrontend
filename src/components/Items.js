import React from 'react';
import './items.css';

function Items() {
  const handleViewItemsClick = () => {
    // Add your logic here for what should happen when the button is clicked
    console.log('Button clicked!');
    // You can navigate to a different page, show/hide content, etc.
  };

  return (
    <div className="container">
      <h5 className="center">ONLY THE BEST</h5>
      <hr></hr>
      <h1 className="center">Fresh Ingredient, Tasty Meals</h1>
      <p>At our restaurant, we believe in the transformative power of fresh ingredients to create truly memorable and delectable meals. Every dish is crafted with care, using locally sourced, seasonal produce to ensure a burst of flavor in every bite. From crisp vegetables to succulent meats, our commitment to freshness elevates the dining experience, making each meal a celebration of vibrant, wholesome goodness. Join us for a culinary journey where freshness meets creativity, and every plate tells a story of quality and taste.</p>
      <button onClick={handleViewItemsClick}>VIEW ITEMS</button>
    </div>
  );
}

export default Items;
