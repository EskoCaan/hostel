import React from 'react';
import './Book.css';

function Book() {
  // Example random Hostelworld widget (replace with real one as needed)
  const hostelId = Math.floor(Math.random() * 10000) + 10000; // random id for demonstration
  const iframeSrc = `https://www.hostelworld.com/hosteldetails.php?HostelNumber=${hostelId}&from=widget`;

  return (
    <div className="book-page bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Your Stay</h1>
      <div className="widget-container bg-white rounded shadow p-6 flex flex-col items-center">
        <iframe
          title="Hostelworld Booking Widget"
          src={iframeSrc}
          width="350"
          height="500"
          frameBorder="0"
          style={{ borderRadius: '0.5rem', border: 'none' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Book; 