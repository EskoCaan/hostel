import React from 'react';
import './Rooms.css';

function Rooms() {
  return (
    <div className="rooms-page bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Rooms</h1>
      <div className="rooms-list flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Dorm Room */}
        <div className="room-card bg-white rounded shadow p-6 w-full md:w-1/3 flex flex-col items-center">
          <img src="zanzibar-dorm.jpg" alt="Dorm Room" className="room-img w-full h-48 mb-4 object-cover rounded" />
          <h2 className="text-xl font-semibold mb-2">Dorm Room</h2>
          <p className="text-gray-700 text-center">Affordable shared accommodation with comfy bunk beds. Perfect for solo travelers and backpackers.</p>
        </div>
        {/* Private Room */}
        <div className="room-card bg-white rounded shadow p-6 w-full md:w-1/3 flex flex-col items-center">
          <img src="private-room.jpg" alt="Private Room" className="room-img w-full h-48 mb-4 object-cover rounded" />
          <h2 className="text-xl font-semibold mb-2">Private Room</h2>
          <p className="text-gray-700 text-center">A cozy private room for couples or friends seeking more privacy and comfort during their stay.</p>
        </div>
        {/* Beachfront Suite */}
        <div className="room-card bg-white rounded shadow p-6 w-full md:w-1/3 flex flex-col items-center">
          <img src="suite.jpg" alt="Beachfront Suite" className="room-img w-full h-48 mb-4 object-cover rounded" />
          <h2 className="text-xl font-semibold mb-2">Beachfront Suite</h2>
          <p className="text-gray-700 text-center">Enjoy luxury and stunning ocean views in our exclusive beachfront suite. Ideal for a special getaway.</p>
        </div>
      </div>
    </div>
  );
}

export default Rooms; 