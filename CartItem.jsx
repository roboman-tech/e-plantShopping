import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice'; // Actions from CartSlice
import { useHistory } from 'react-router-dom'; // For navigation to the product listing page

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from the Redux store
  const history = useHistory();

  // Handle quantity increment
  const handleIncrement = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: getItemQuantity(itemId) + 1 }));
  };

  // Handle quantity decrement
  const handleDecrement = (itemId) => {
    const currentQuantity = getItemQuantity(itemId);
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ itemId, quantity: currentQuantity - 1 }));
    }
  };

  // Get the current quantity of an item
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Unit Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{getItemQuantity(item.id)}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-item">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h2>Total Amount: ${calculateTotal()}</h2>
      </div>

      <div className="cart-actions">
        <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
        <button onClick={() => history.push('/plants')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartItem;