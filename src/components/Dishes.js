import React from 'react';
import './dishes.css';


function Dishes({ dishes }) {
  return (
    <div className='DishesSection'>
      <div className='DishesList'>
        {dishes.map((dish, index) => (
          <div key={index} className='DishContainer'>
            <div className='DishesDetail'>
              <p>${dish.price}</p>
              <h5>{dish.name}</h5>
              <p>{dish.description}</p>
            </div>
            <div className='DishImage'>
              <img src={dish.image} alt={dish.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
