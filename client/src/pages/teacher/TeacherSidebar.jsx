import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Book,
  Users,
  Calendar,
  ClipboardList,
  Home,
  User,
  MessageCircle,
  Bell,
  LogOut
} from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const TeacherSidebar = () => {
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext);
  const move = (route) => {
    if (route === 'teacher') return navigate('/teacher');
    navigate(`/teacher/${route}`);
  };

  const handleLogout = () => {
    setUser(null); // or remove specific items if needed
    navigate('/login');
  };

  return (
    <aside className="h-screen w-64 bg-blue-900 text-white flex flex-col justify-between shadow-lg">
      <div>
        <Link to={'/'}>
          <div className="px-6 py-4 text-2xl font-bold border-b border-blue-700">
            CampusConnect
          </div>
        </Link>

        <nav className="px-4 py-4 space-y-6 text-sm">
          <div>
            <h3 className="text-blue-300 uppercase tracking-wide mb-2">Main</h3>
            <ul className="space-y-2">
              <li onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <Home size={18} /> Home
            </li>
              <li onClick={() => move('teacher')} className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <Home size={18} /> Dashboard
              </li>
              <li onClick={() => move('profile')} className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <User size={18} /> Profile
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <MessageCircle size={18} /> Chat
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <Bell size={18} /> Notification
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 uppercase tracking-wide mb-2">Actions</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <ClipboardList size={18} /> Assignments
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <Calendar size={18} /> Events
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <Book size={18} /> Project
              </li>
              <li onClick={() => move('mark')} className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded">
                <Users size={18} /> Attendance
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Logout button at the bottom */}
      <div className="p-4 border-t border-blue-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default TeacherSidebar;