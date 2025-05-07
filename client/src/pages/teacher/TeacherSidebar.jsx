import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Book, Users, Calendar, ClipboardList, Home, User, MessageCircle, Bell } from 'lucide-react';

const TeacherSidebar = () => {
  const navigate = useNavigate();

  const move = (route) => {
    if (route === 'teacher') return navigate('/teacher');
    navigate(`/teacher/${route}`);
  };

  return (
    <aside className="h-screen w-64 bg-blue-900 text-white flex flex-col shadow-lg">
      <Link to={'/'}><div className="px-6 py-4 text-2xl font-bold border-b border-blue-700">
        CampusConnect
      </div></Link>

      <nav className="flex-1 px-4 py-4 space-y-6 text-sm">
        <div>
          <h3 className="text-blue-300 uppercase tracking-wide mb-2">Main</h3>
          <ul className="space-y-2">
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
    </aside>
  );
};

export default TeacherSidebar;