import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

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
        <h1>Welcome to the Home Page</h1> <br />
        <h2> About Us</h2> <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima blanditiis adipisci sed maiores ipsa! Sunt, placeat saepe velit distinctio corporis iusto dolor rerum. Dolorum unde quasi suscipit molestiae dolorem.</p>


      </div>

      <footer className="footer">
        <p> All Rights Reserved. </p>
      </footer>
    </div>
  );
};

export default Home1;
