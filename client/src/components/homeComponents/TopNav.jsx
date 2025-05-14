import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const TopNav = () => {
  const{userType,setUserType,user,setUser} = useContext(AuthContext);
  return (
    <>
    {user ? (
      <nav className="w-full bg-gray-900 text-white shadow-md select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-2 relative">
        
        {/* Left Section: Logo - absolutely positioned */}
        <div className="absolute left-4">
          <Link
            to="/"
            className="text-xl font-bold text-yellow-400 tracking-wide hover:text-white transition"
          >
            CampusConnect
          </Link>
        </div>
    
        {/* Right Section: Links */}
        <div className="flex space-x-4 items-center">
          <Link to="/dashboard" className="text-sm hover:text-yellow-400 transition">Dashboard</Link>
          <button onClick={() => setUser(null)} className="text-sm hover:text-yellow-400 transition">Logout</button>
        </div>
      </div>
    </nav>
    
    ):
    (
      <nav className="w-full bg-gray-900 text-white shadow-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        {/* Left Section: Logo or Home Link */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold text-yellow-400 tracking-wide hover:text-white transition">
            CampusConnect
          </Link>
        </div>

        {/* Right Section: Login Buttons */}
        <div className="flex space-x-4">
        <Link
            to="/"
            className="text-sm hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-sm hover:text-yellow-400 transition"
          >
            
            <span onClick={e=>setUserType("Student")}>Student Login</span>
          </Link>
          <Link
            to="/login"
            className="text-sm hover:text-yellow-400 transition"
          >
            <span onClick={e=>setUserType("Faculty")}>Faculty Login</span>
          </Link>
          <Link
            to="/login"
            className="text-sm hover:text-yellow-400 transition"
          >
            <span onClick={e=>setUserType("Admin")}>Admin</span>
          </Link>
          <Link
            to="/alumni"
            className="text-sm hover:text-yellow-400 transition"
          >
            Alumni
          </Link>
        </div>
      </div>
    </nav>
    )}
    </>
  );
};

export default TopNav;