import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-teal-600 p-2 text-white">
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">Rooms</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('zanzibar-beach.jpg')" }}>
        <h1 className="text-4xl text-white text-center pt-20">Welcome to 197 Hostel, Zanzibar</h1>
        <a href="/book" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded">Book Now</a>
      </div>
    </div>
  );
}

export default App; 