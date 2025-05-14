import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const {user,setUser} = useContext(AuthContext);
  const move = (route) => {
    if(route==='/') return navigate('/');
    if (route === 'admin') return navigate('/admin');
    navigate(`/admin/${route}`);
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6 space-y-6">
      <Link to={'/'}><h2  className="text-2xl font-bold text-blue-400 mb-6">CampusConnect</h2></Link>
      <div className="space-y-4">
        <h3 className="text-sm uppercase text-gray-400 tracking-wide">General</h3>
        <ul className="space-y-2">
          <li onClick={()=>move('/')} className="cursor-pointer hover:text-blue-400 transition">Home</li>
          <li onClick={() => move('profile')} className="cursor-pointer hover:text-blue-400 transition">Profile</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Chat</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Notification</li>
          <Link><li onClick={()=>setUser(null)}  className="cursor-pointer hover:text-blue-400 transition">Logout</li></Link>
        </ul>
      </div>

      <div className="space-y-4 border-t border-gray-700 pt-4">
        <h3 className="text-sm uppercase text-gray-400 tracking-wide">Management</h3>
        <ul className="space-y-2">
          <li onClick={() => move('admin')} className="cursor-pointer hover:text-blue-400 transition">Dashboard</li>
          <li onClick={() => move('users')} className="cursor-pointer hover:text-blue-400 transition">Manage Users</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Project</li>
          <li onClick={() => move('attendance')} className="cursor-pointer hover:text-blue-400 transition">Attendance</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Performance</li>
          
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
