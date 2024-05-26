import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Our Website!</h1>
      <p>This is the home page of our application.</p>
      <div className="d-grid gap-2">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
