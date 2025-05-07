import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/logoImg.jpg';

function Header() {
  return (
    <header className="bg-white shadow-md w-full select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-3 md:mb-0 text-select:none select-none">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="CampusConnect Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-gray-800">CampusConnect</span>
          </Link>
        </div>

        {/* Main Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center md:space-x-6 text-sm font-medium text-gray-700">
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li><Link to="/admissions" className="hover:text-yellow-500 transition">Admissions</Link></li>
            <li><Link to="/academics" className="hover:text-yellow-500 transition">Academics</Link></li>
            <li><Link to="/campus-life" className="hover:text-yellow-500 transition">Campus Life</Link></li>
            <li><Link to="/research" className="hover:text-yellow-500 transition">Research</Link></li>
            <li><Link to="/global" className="hover:text-yellow-500 transition">Global</Link></li>
          </ul>

          {/* Extra Links and Search */}
          <div className="flex items-center mt-3 md:mt-0 space-x-4">
            <Link to="/giving" className="hover:text-yellow-500 transition">Giving</Link>
            <Link to="/calendar" className="hover:text-yellow-500 transition">Calendar</Link>
            <Link to="/maps" className="hover:text-yellow-500 transition">Maps</Link>
            <button className="hover:text-yellow-500 transition">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;