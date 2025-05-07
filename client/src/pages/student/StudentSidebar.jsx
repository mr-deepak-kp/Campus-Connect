
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, Bell, MessageCircle, User, ClipboardList, Calendar, FileText, CreditCard, CheckCircle, BarChart2 } from 'lucide-react';


const StudentSidebar = () => {
  const navItems = [
    { name: 'Profile', icon: <User size={18} />, path: '/student/profile' },
    { name: 'Chat', icon: <MessageCircle size={18} />, path: '/student/chat' },
    { name: 'Notification', icon: <Bell size={18} />, path: '/student/notification' },
    { name: 'Dashboard', icon: <Home size={18} />, path: '/student/dashboard' },
    { name: 'Assignments', icon: <ClipboardList size={18} />, path: '/student/assignments' },
    { name: 'Events', icon: <Calendar size={18} />, path: '/student/events' },
    { name: 'Project', icon: <FileText size={18} />, path: '/student/project' },
    { name: 'Payment', icon: <CreditCard size={18} />, path: '/student/payment' },
    { name: 'Attendance', icon: <CheckCircle size={18} />, path: '/student/attendance' },
    { name: 'Performance', icon: <BarChart2 size={18} />, path: '/student/performance' },
  ];

  return (
    <div className="w-64 min-h-screen bg-indigo-800 text-white shadow-lg flex flex-col">
      <Link to={'/'}><div className="text-2xl font-bold px-6 py-6 border-b border-indigo-700">
        Campus<span className="text-yellow-300">Connect</span>
      </div></Link>
      <nav className="flex flex-col p-4 space-y-2 text-sm font-medium">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${
                isActive ? 'bg-indigo-600' : 'hover:bg-indigo-700'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default StudentSidebar;