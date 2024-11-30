import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home1.css";

const Home1 = () => {
  const navigate = useNavigate();

  const navigatelogin = () => {
    navigate("/Login");
  };

  return (
    <div >
    
      <nav className="navbar">
        <ul className="navbarlist">
          <li className="li">Home</li>
          <li className="li">About</li>
          <li className="li">Contact</li>
          <li className="li">
            <button className="button" onClick={navigatelogin}>
              Login
            </button>
          </li>
        </ul>
      </nav>

   
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <h2> this is home page</h2>
      </div>

      <div className="footer">
        <p> All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Home1;
