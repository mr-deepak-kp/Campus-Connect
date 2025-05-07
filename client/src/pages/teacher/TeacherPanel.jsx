import React, { useContext, useEffect, useState } from 'react';
import Topbar from '../../components/Topbar.jsx';
import TeacherSidebar from './TeacherSidebar.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';

const TeacherPanel = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    attendanceTaken: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/teacher/stats/${user.id}`);
        setStats(res.data);
      } catch (err) {
        console.error('Failed to load teacher dashboard stats:', err);
        alert("Error: check the console");
      }
    };

    if (user?.id) fetchStats();
  }, [user]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <TeacherSidebar />
      
      <div className="flex flex-col flex-1">
        <Topbar name={user.name} />
        
        <main className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Teacher Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-medium text-gray-700">Total Students</h3>
              <p className="text-3xl font-bold text-blue-700 mt-2">{stats.totalStudents}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-medium text-gray-700">Courses Assigned</h3>
              <p className="text-3xl font-bold text-green-700 mt-2">{stats.totalCourses}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
              <h3 className="text-lg font-medium text-gray-700">Attendance Taken</h3>
              <p className="text-3xl font-bold text-yellow-700 mt-2">{stats.attendanceTaken}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherPanel;