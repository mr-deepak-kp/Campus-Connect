import React, { useEffect, useState } from 'react';
import AttendanceTable from '../../components/AttendanceTable.jsx';
import axios from 'axios';
import AdminSidebar from './AdminSidebar.jsx';

const AdminAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attendanceRes = await axios.get('http://localhost:5000/api/attendance');
        setAttendance(attendanceRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please check console for details.');
      }
    };
    fetchData();
  }, []);

  const handleDownloadCSV = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/attendance/csv', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'attendance_report.csv';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download CSV file. Check the console for details.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Attendance Records</h1>
          <button
            onClick={handleDownloadCSV}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download CSV
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <AttendanceTable records={attendance} />
        </div>
      </main>
    </div>
  );
};

export default AdminAttendance;
