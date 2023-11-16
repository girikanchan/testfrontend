import React from 'react';
import './dishes.css';

function Dishes({ dishes }) {
  return (
    <div className='back'>
      <div className='DishesSection'>
        <div className='DishesList'>
          {dishes.map((dish, index) => (
            <div key={index} className='DishContainer'>
              <div className='DishImage'>
                <img src={dish.image} alt={dish.name} />
              </div>
              <div className='DishesDetail'>
                <h5>{dish.name}</h5>
                <p id='price'>${dish.price}</p>
                <p>{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
