import React from "react";
import logo from "/Assets/mile1-assets/logo.svg"; // Logo dosyasını doğru yol üzerinden içe aktarın
import "./Baslik.css";
const Baslik = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Baslik;
