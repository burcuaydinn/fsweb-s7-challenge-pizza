import React from "react";
import "./SiparisAlindi.css";
import logo from "/Assets/mile1-assets/logo.svg";
export default function SiparisAlindi({ currentOrder }) {
  // currentOrder tanımsızsa, null döndürerek render etmeyi engelliyoruz
  if (!currentOrder) {
    return null;
  }

  return (
    <div className="container">
      {/* Başlık ve sipariş alındı bilgisi */}
      <p className="title">Lezzetin Yolda</p>
      <div>
        <h1 className="order-received">SİPARİŞ ALINDI</h1>
        <hr />
      </div>
      <p className="pizza-description">Position Absolute Acı Pizza</p>

      <hr />

      {/* Sipariş detayları */}
      <div className="order-details">
        <br />
        <p className="mt-5">Boyut:{currentOrder.size} </p>
        <br />
        <p>Hamur:{currentOrder.hamurKalinliği} </p>
        <br />
        <p>Ek Malzemeler:{currentOrder.malzemeler}</p>
      </div>
      {/* Sipariş toplamı */}
      <div className="order-summary">
        <h4 className="mb-4">Sipariş Toplamı</h4>
        <p className="mb-2">Seçimler:{currentOrder.totalMalzemePrice} ₺</p>
        <p className="toplam-success">Toplam:{currentOrder.totalPrice} ₺</p>
      </div>
    </div>
  );
}
