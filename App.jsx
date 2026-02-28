import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; // Optional if you want to link the button to another page

const App = () => {
  return (
    <div className="app-container">
      {/* Landing Page Section */}
      <div className="landing-page">
        <div className="header">
          <h1>Paradise Nursery</h1>
          <p>Your online plant shop for all things green and beautiful!</p>
        </div>

        <div className="landing-page-content">
          <h2>Welcome to Paradise Nursery</h2>
          <p>Explore our wide selection of plants and bring nature into your home or garden.</p>
          {/* "Get Started" button */}
          <Link to="/shop"> {/* Use Link for routing, if you are using React Router */}
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;