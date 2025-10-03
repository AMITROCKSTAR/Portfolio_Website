import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed w-full bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Amit Kumar</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
