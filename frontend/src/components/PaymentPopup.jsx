import React from 'react'
import QRCode from 'qrcode.react';
import "./Navbar.css"
const PaymentPopup = ({ qrCodeUrl, onClose ,email,setEmail}) => {
  return (
    <div className="payment-popup">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
      <h1 className='text-center'>Pay</h1>
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      {qrCodeUrl && <QRCode value={qrCodeUrl} />}
    </div>
  </div>
  )
}

export default PaymentPopup;