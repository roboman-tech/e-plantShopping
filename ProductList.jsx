import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Import the addItem action from CartSlice
import Navbar from './Navbar'; // Import the Navbar component

const ProductList = () => {
  // State to track which plants have been added to the cart
  const [addedToCart, setAddedToCart] = useState({});

  const plantCategories = [
    {
      category: 'Indoor Plants',
      plants: [
        { id: 1, name: 'Snake Plant', price: 25, image: '/images/snake-plant.jpg' },
        { id: 2, name: 'Aloe Vera', price: 15, image: '/images/aloe-vera.jpg' },
        { id: 3, name: 'Peace Lily', price: 20, image: '/images/peace-lily.jpg' },
        { id: 4, name: 'ZZ Plant', price: 30, image: '/images/zz-plant.jpg' },
        { id: 5, name: 'Spider Plant', price: 18, image: '/images/spider-plant.jpg' },
        { id: 6, name: 'Pothos', price: 22, image: '/images/pothos.jpg' }
      ]
    },
    // Additional categories can be added here
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      <h1>Our Plants</h1>
      {plantCategories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-thumbnail" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]} // Disable if already added
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;