import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';

const AdminAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { backendURL } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsRes = await axios.get(`${backendURL}/api/auth/users/student`);
        const attendanceRes = await axios.get(`${backendURL}/api/attendance`);
        setStudents(studentsRes.data);
        setAttendanceData(attendanceRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please check console.');
      }
    };
    fetchData();
  }, [backendURL]);

 const getPresentCount = (studentId) => {
  return attendanceData.filter((record) =>
    record.student?.toString() === studentId.toString() && record.status === 'present'
  ).length;
};

  const totalClasses = [...new Set(attendanceData.map((record) => record.date))].length;

  const filteredStudents = students.filter((student) => {
    const search = searchQuery.toLowerCase();
    return (
      student.name.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.branch.toLowerCase().includes(search) ||
      student.course.toLowerCase().includes(search)
    );
  });

  const handleDownloadCSV = () => {
    let csv = 'Name,Email,Branch,Course,Present,Total,Percentage\n';
    filteredStudents.forEach((student) => {
      const present = getPresentCount(student._id);
      const percentage = totalClasses > 0 ? ((present / totalClasses) * 100).toFixed(2) : '0.00';
      csv += `${student.name},${student.email},${student.branch},${student.course},${present},${totalClasses},${percentage}%\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance_report.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Attendance Records</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by name, email, branch..."
              className="px-3 py-2 border rounded-md focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleDownloadCSV}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Download CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-left text-sm font-semibold">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Branch</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Present</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">%</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y">
              {filteredStudents.map((student) => {
                const present = getPresentCount(student._id);
                const percentage = totalClasses > 0 ? ((present / totalClasses) * 100).toFixed(2) : '0.00';

                return (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.email}</td>
                    <td className="px-4 py-2">{student.branch}</td>
                    <td className="px-4 py-2">{student.course}</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">{present}</td>
                    <td className="px-4 py-2 text-gray-700">{totalClasses}</td>
                    <td className="px-4 py-2 text-blue-600 font-bold">{percentage}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminAttendance;