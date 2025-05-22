// AdminAttendance.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';

const AdminAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { backendURL } = useContext(AuthContext);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/auth/summary`);
        setAttendance(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch summary data.");
      }
    };
    fetchSummary();
  }, [backendURL]);

  const handleDownloadCSV = () => {
    const headers = ['Name', 'Email', 'Branch', 'Course', 'Present', 'Total', 'Percentage'];
    const rows = attendance.map(student => [
      student.name,
      student.email,
      student.branch,
      student.course,
      student.present,
      student.total,
      `${student.percentage}%`
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "attendance_summary.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredData = attendance.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Attendance Summary</h1>
          <button
            onClick={handleDownloadCSV}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download CSV
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name, email, branch, or course"
          className="w-full mb-4 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Branch</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Present</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">% Present</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2">{student.branch.toUpperCase()}</td>
                  <td className="px-4 py-2">{student.course.toUpperCase()}</td>
                  <td className="px-4 py-2">{student.present}</td>
                  <td className="px-4 py-2">{student.total}</td>
                  <td className="px-4 py-2">{student.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminAttendance;