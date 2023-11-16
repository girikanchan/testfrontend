import React from 'react';
import Dishes from './Dishes'; // Adjust the path accordingly

const dishesData = [
  {
    price: 30.6,
    name: 'Grilled Filled',
    description: 'Dish description 1',
    image: 'https://th.bing.com/th/id/OIP.jQLrVm4aq8vuRUlpajx1BQHaE6?w=351&h=191&c=7&r=0&o=5&pid=1.7',
  },
  {
    price: 30.6,
    name: 'Another Dish',
    description: 'Dish description 2',
    image: 'https://th.bing.com/th/id/OIP.NCGnoM-SKlkSgWdrPFC2_wHaFj?w=254&h=191&c=7&r=0&o=5&pid=1.7',
  },
  {
    price: 30.6,
    name: 'Another Dish',
    description: 'Dish description 2',
    image: 'https://th.bing.com/th?id=OIP.NVXrSOrofUltgDT2Eq0C4QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
  // Add more dishes as needed
];

function DishesList() {
  return (
    <div>
      <Dishes dishes={dishesData} />
    </div>
  );
}

export default DishesList;
