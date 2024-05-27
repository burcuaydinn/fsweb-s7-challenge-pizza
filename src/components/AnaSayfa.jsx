import React from "react";
import homeBanner from "/Assets/mile1-assets/home-banner.png";
import "./AnaSayfa.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AnaSayfa = () => {
  return (
    <div className="banner-container">
      <img src={homeBanner} alt="Ana Sayfa Banner" />
      <div className="content-container">
        <div className="text-container">
          <p className="banner-text">KOD ACIKTIRIR</p>
          <p className="banner-subtext">PİZZA, DOYURUR</p>
        </div>
        <div className="button-container">
          <Link to="/SiparisOlustur" className="custom-button">
            <button className="custom-button grow-button">ACIKTIM</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnaSayfa;
