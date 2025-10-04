import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<nav className="fixed w-full bg-gradient-to-r from-blue-800 via-purple-800 to-purple-900 bg-opacity-95 shadow-md z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white">Amit Kumar</h1>
    <div className="space-x-6">
      <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
      <Link to="/projects" className="text-white hover:text-blue-400 transition">Projects</Link>
      <Link to="/skills" className="text-white hover:text-blue-400 transition">Skills</Link>
      <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
      <Link to="/blog" className="text-white hover:text-blue-400 transition">Blog</Link>
      <Link to="/about" className="text-white hover:text-blue-400 transition">About</Link>
    </div>
  </div>
</nav>

);

export default Navbar;
