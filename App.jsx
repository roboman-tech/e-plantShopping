import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Optional if you're routing to another page

const App = () => {
  // State to manage whether to show the product list
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true); // Set showProductList to true when "Get Started" is clicked
  };

  return (
    <div className="app-container">
      {/* Landing Page Section */}
      <div className="landing-page">
        <div className="header">
          <h1>Paradise Nursery</h1>
          <p>Your online plant shop for all things green and beautiful!</p>
        </div>

        {!showProductList ? (
          <div className="landing-page-content">
            <h2>Welcome to Paradise Nursery</h2>
            <p>Explore our wide selection of plants and bring nature into your home or garden.</p>
            {/* "Get Started" button */}
            <button onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        ) : (
          <div>
            {/* Display the product list when 'Get Started' is clicked */}
            <h2>Our Plants</h2>
            {/* You can replace this with your actual product list component */}
            <p>Here is a list of our products...</p>
            {/* Example: <ProductList /> */}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;