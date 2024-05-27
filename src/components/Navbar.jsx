import React from "react";
import logo1 from "/Assets/mile2-aseets/icons/1.svg";
import logo2 from "/Assets/mile2-aseets/icons/2.svg";
import logo3 from "/Assets/mile2-aseets/icons/3.svg";
import logo4 from "/Assets/mile2-aseets/icons/4.svg";
import logo5 from "/Assets/mile2-aseets/icons/5.svg";
import logo6 from "/Assets/mile2-aseets/icons/6.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="item">
        <img src={logo1} alt="Icon 1" className="icon" />
        <p className="text">YENİ! Kore</p>
      </div>

      <div className="item">
        <img src={logo2} alt="Icon 2" className="icon" />
        <p className="text">Pizza</p>
      </div>

      <div className="item">
        <img src={logo3} alt="Icon 3" className="icon" />
        <p className="text">Burger</p>
      </div>

      <div className="item">
        <img src={logo4} alt="Icon 4" className="icon" />
        <p className="text">Kızartmalar</p>
      </div>

      <div className="item">
        <img src={logo5} alt="Icon 5" className="icon" />
        <p className="text">Fast food</p>
      </div>

      <div className="item">
        <img src={logo6} alt="Icon 6" className="icon" />
        <p className="text">Gazlı İçecek</p>
      </div>
    </div>
  );
}
