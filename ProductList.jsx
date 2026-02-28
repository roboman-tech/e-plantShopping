import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice'; // Importing addItem action from CartSlice

const ProductList = () => {
  // State to manage which plants have been added to the cart
  const [addedToCart, setAddedToCart] = useState({});

  // Sample plant data with categories
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
    {
      category: 'Outdoor Plants',
      plants: [
        { id: 7, name: 'Rose', price: 10, image: '/images/rose.jpg' },
        { id: 8, name: 'Lavender', price: 12, image: '/images/lavender.jpg' },
        { id: 9, name: 'Cactus', price: 14, image: '/images/cactus.jpg' },
        { id: 10, name: 'Sunflower', price: 8, image: '/images/sunflower.jpg' },
        { id: 11, name: 'Tulip', price: 12, image: '/images/tulip.jpg' },
        { id: 12, name: 'Lily', price: 15, image: '/images/lily.jpg' }
      ]
    },
    {
      category: 'Succulents',
      plants: [
        { id: 13, name: 'Echeveria', price: 9, image: '/images/echeveria.jpg' },
        { id: 14, name: 'Jade Plant', price: 20, image: '/images/jade-plant.jpg' },
        { id: 15, name: 'String of Pearls', price: 18, image: '/images/string-of-pearls.jpg' },
        { id: 16, name: 'Sedum', price: 10, image: '/images/sedum.jpg' },
        { id: 17, name: 'Burro’s Tail', price: 12, image: '/images/burros-tail.jpg' },
        { id: 18, name: 'Crown of Thorns', price: 14, image: '/images/crown-of-thorns.jpg' }
      ]
    }
  ];

  const dispatch = useDispatch();

  // Function to handle adding plant to cart
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true }); // Mark this plant as added
  };

  return (
    <div>
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
                  disabled={addedToCart[plant.name]} // Disable button after plant is added to cart
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