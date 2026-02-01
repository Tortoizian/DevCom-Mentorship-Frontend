import React from 'react';
import './SuccessModal.css';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null; 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>BOOKING CONFIRMED!</h2>
        </div>
        <div className="modal-body">
          <div className="success-icon">✔️</div>
          <h3>Success!</h3>
          <p>A confirmation email has been sent to mayas.19@gmail.com</p>
          
          <div className="qr-card">
            <h4>DIGITAL ROOM KEY</h4>
            {/* You can replace this with a real QR image later */}
            <div className="qr-placeholder">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LC103" alt="QR Code" />
            </div>
            <p className="scan-text">Scan at Room Entrance</p>
            <div className="booking-details">
              <p><strong>Room:</strong> LC 103</p>
              <p><strong>Date:</strong> 18 Jan, 2026</p>
              <p><strong>Time:</strong> 11:00 AM - 3:00 PM</p>
              <p><strong>Booking ID:</strong> #LIB/2026/Xw531</p>
            </div>
          </div>
          
          <div className="modal-actions">
            <button className="btn-blue">Add to Calendar</button>
            <button className="btn-grey">Get Directions</button>
          </div>
          <button className="back-link" onClick={onClose}>Back to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;