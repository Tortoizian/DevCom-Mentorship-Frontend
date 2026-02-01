import React, { useState } from 'react';
import './Dashboard.css';
import BookingCalendar from '../components/BookingCalendar'; 
import SuccessModal from '../components/SuccessModal';     

function Dashboard() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <div className="main-content">
        <header className="dash-header">
          <h1>Welcome Maya!</h1>
        </header>

        <div className="calendar-timeline-row">
          <BookingCalendar />
          <div className="timeline-placeholder">
             <p>Select a time slot on the grid...</p>
             <div className="time-grid"></div>
          </div>
        </div>

        <section className="rooms-section">
          <h3>AVAILABLE ROOMS</h3>
          <div className="room-card" onClick={() => setSelectedRoom({name: "LC 103", cap: 100})}>
            <h4>LC 103 - Cap: 100</h4>
          </div>
        </section>
      </div>

      <aside className="sidebar">
        {selectedRoom ? (
          <div className="details">
            <h3>{selectedRoom.name}</h3>
            <button className="confirm-btn" onClick={() => setIsModalOpen(true)}>
              Review and Confirm
            </button>
          </div>
        ) : <p>No Room Selected</p>}
      </aside>

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Dashboard;