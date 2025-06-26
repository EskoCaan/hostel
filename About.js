import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About 197 Hostel</h1>
      <p className="text-xl text-center max-w-xl bg-white rounded shadow p-6">
        197 Hostel, Gökhan Yıldırım'ın Zanzibar aşkıyla kurduğu bir cennet!
      </p>
    </div>
  );
}

export default About; 