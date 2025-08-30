import React from 'react';
import { IconUser } from '@tabler/icons-react';
import { IconBriefcase2Filled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-black-600 cursor-pointer flex">
          <IconBriefcase2Filled color='blue' size={28} stroke={1.5} />
          JobPortal
        </div>

        {/* Middle - Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <div className="relative group">
            <button className="hover:text-blue-600 transition">For Candidates ▾</button>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md w-48 text-sm text-gray-700">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Browse Jobs</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Saved Jobs</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Jobs</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Profile</a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-600 transition">Help</a>
        </nav>

        {/* Right - Auth */}
        <div className="flex items-center gap-4">
          <Link to="/signin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium">
            <IconUser size={20} stroke={2} />
            Sign In
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
          >
            Register Today
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
