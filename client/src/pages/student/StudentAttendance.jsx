import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import AttendanceTable from '../../components/AttendanceTable.jsx';
import axios from 'axios';
import StudentSidebar from './StudentSidebar.jsx';
import TopNav from '../../components/homeComponents/TopNav.jsx';
const StudentAttendance = () => {
  const { user,backendURL } = useContext(AuthContext);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await axios.get(`${backendURL}/api/attendance/student/${user._id}`);
      console.log(res);
      setRecords(res.data);
    };
    if (user?._id) fetchAttendance();
  }, [user]);

  const presentCount = records.filter(r => r.status === 'present').length;
  const absentCount = records.filter(r => r.status === 'absent').length;
  const totalCount = records.length;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Attendance Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow text-center">
            <h4 className="text-lg font-semibold">Total Present</h4>
            <p className="text-2xl">{presentCount}</p>
          </div>
          <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow text-center">
            <h4 className="text-lg font-semibold">Total Absent</h4>
            <p className="text-2xl">{absentCount}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow text-center">
            <h4 className="text-lg font-semibold">Total Days</h4>
            <p className="text-2xl">{totalCount}</p>
          </div>
        </div>

        <AttendanceTable records={records} />
      </div>
    </div>
  );
};

export default StudentAttendance;