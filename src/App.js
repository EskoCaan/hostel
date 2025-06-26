import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Rooms from './Rooms';
import About from './About';
import Blog from './Blog';
import Book from './Book';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-teal-600 p-2 text-white">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('zanzibar-beach.jpg')" }}>
              <h1 className="text-4xl text-white text-center pt-20">Welcome to 197 Hostel, Zanzibar</h1>
              <Link to="/book" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded">Book Now</Link>
            </div>
          } />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 