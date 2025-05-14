import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';
import StudentSidebar from './StudentSidebar.jsx';
import Topbar from '../../components/Topbar.jsx';
import TopNav from '../../components/homeComponents/TopNav.jsx';

const StudentPanel = () => {
  const { user, backendURL } = useContext(AuthContext);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        console.log(user);
        const res = await axios.get(`${backendURL}/api/attendance/student/${user._id}`);
        setRecords(res.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        alert("Error check the console");
      }
    };
    if (user?._id) fetchAttendance();
  }, [user]);

  const presentCount = records.filter(r => r.status === 'present').length;
  const absentCount = records.filter(r => r.status === 'absent').length;

  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <div className="flex-1 bg-gray-50">
        <Topbar name={user.name} />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>
          
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <p className="text-lg"><strong>Name:</strong> {user.name}</p>
            <p className="text-lg"><strong>Student ID:</strong> {user.rollNo}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-green-800">Total Present</h3>
              <p className="text-2xl font-bold">{presentCount}</p>
            </div>
            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-red-800">Total Absent</h3>
              <p className="text-2xl font-bold">{absentCount}</p>
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-blue-800">Total Records</h3>
              <p className="text-2xl font-bold">{records.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;