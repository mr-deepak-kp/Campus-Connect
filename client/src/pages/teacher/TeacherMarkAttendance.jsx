import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

const TeacherMarkAttendance = () => {
  const { user, backendURL } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('btech');
  const [branch, setBranch] = useState('cse');
  const [session, setSession] = useState('2022-2026');
  const [submittedToday, setSubmittedToday] = useState(false);
  const date = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const studentRes = await axios.get(`${backendURL}/api/auth/users/student`);
        setStudents(studentRes.data);

        const attendanceRes = await axios.get(`${backendURL}/api/attendance/check?markedBy=${user._id}&date=${date}`);
        const initialAttendance = {};

        if (attendanceRes.data.exists) {
          setSubmittedToday(true);
          attendanceRes.data.records.forEach(rec => {
            initialAttendance[rec.studentId] = rec.status;
          });
        } else {
          studentRes.data.forEach(s => {
            initialAttendance[s._id] = null;
          });
        }

        setAttendance(initialAttendance);
      } catch (err) {
        console.error(err);
        alert("Failed to load data. Check console.");
      }
    };

    fetchInitialData();
  }, [user._id, date]);

  useEffect(() => {
    const filtered = students.filter(
      (s) =>
        s.branch.toLowerCase() === branch.toLowerCase() &&
        s.course.toLowerCase() === course.toLowerCase() &&
        s.batch.toLowerCase() === session.toLowerCase()
    );
    setFilteredUsers(filtered);
  }, [students, course, branch, session]);

  const handleStatusChange = (id, status) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
  };
  console.log(attendance);
  const handleSubmit = async () => {
    try {
      const payload = Object.keys(attendance).map(studentId => ({
        student: studentId,
        date,
        status: attendance[studentId] || 'absent',
        subject,
        markedBy: user._id
      }));

      if (submittedToday) {
        await axios.put(`${backendURL}/api/attendance/update-today`, payload);
        alert('Attendance updated successfully!');
      } else {
        await axios.post(`${backendURL}/api/attendance`, payload);
        alert('Attendance marked successfully!');
        setSubmittedToday(true);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Error submitting attendance');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Mark Attendance for {date}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Subject"
          className="border p-2 rounded"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />
        <select className="border p-2 rounded" value={course} onChange={e => setCourse(e.target.value)}>
          <option value="btech">BTech</option>
          <option value="bca">BCA</option>
          <option value="mca">MCA</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="agriculture">Agriculture</option>
        </select>
        <select className="border p-2 rounded" value={session} onChange={e => setSession(e.target.value)}>
          <option value="2022-2026">2022-2026</option>
          <option value="2023-2027">2023-2027</option>
          <option value="2024-2028">2024-2028</option>
          <option value="2025-2029">2025-2029</option>
        </select>
        <select className="border p-2 rounded" value={branch} onChange={e => setBranch(e.target.value)}>
          <option value="cse">CSE</option>
          <option value="me">ME</option>
          <option value="cse-aiml">CSE-AIML</option>
          <option value="ce">CE</option>
          <option value="ec">EC</option>
        </select>
      </div>

      {filteredUsers.length > 0 ? (
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Present</th>
              <th className="border px-4 py-2">Absent</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(student => (
              <tr key={student._id} className="text-center">
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  <input
                    type="radio"
                    name={`status-${student._id}`}
                    value="present"
                    checked={attendance[student._id] === 'present'}
                    onChange={() => handleStatusChange(student._id, 'present')}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="radio"
                    name={`status-${student._id}`}
                    value="absent"
                    checked={attendance[student._id] === 'absent'}
                    onChange={() => handleStatusChange(student._id, 'absent')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-2"
      >
        {submittedToday ? 'Update Attendance' : 'Submit Attendance'}
      </button>
      <Link to="/teacher">
        <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Back</button>
      </Link>
    </div>
  );
};

export default TeacherMarkAttendance;