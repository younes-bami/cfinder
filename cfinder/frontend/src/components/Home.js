import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Sports Coaching App</h1>
      <p>Your one-stop solution to find and book sessions with sports coaches.</p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/coaches">Find Coaches</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
