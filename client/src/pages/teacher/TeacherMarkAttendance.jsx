import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

const TeacherMarkAttendance = () => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [session, setSession] = useState('');
  const [submittedToday, setSubmittedToday] = useState(false);
  const date = new Date().toISOString().slice(0, 10); // fixed current date

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const studentRes = await axios.get('http://localhost:5000/api/auth/users/student');
        setStudents(studentRes.data);
        const initial = {};
        studentRes.data.forEach(s => initial[s._id] = null);
        setAttendance(initial);

        const checkRes = await axios.get(`http://localhost:5000/api/attendance/check?markedBy=${user.id}&date=${date}`);
        if (checkRes.data.exists) {
          setSubmittedToday(true);
          const existing = {};
          checkRes.data.records.forEach(rec => {
            existing[rec.studentId] = rec.status;
          });
          setAttendance(existing);
          setSubject(checkRes.data.records[0]?.subject || '');
          setCourse(checkRes.data.records[0]?.course || '');
          setBranch(checkRes.data.records[0]?.branch || '');
          setSession(checkRes.data.records[0]?.session || '');
        }
      } catch (err) {
        console.error(err);
        alert("Error check the console");
      }
    };
    fetchInitialData();
  }, [user.id, date]);

  const handleStatusChange = (id, status) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
  };

  const handleSubmit = async () => {
    try {
      const payload = Object.keys(attendance).map(studentId => ({
        student:studentId,
        date,
        status: attendance[studentId] || 'absent', // default to absent if not selected
        subject,
        // course,
        // branch,
        // session,
        markedBy: user.id,
      }));

      if (submittedToday) {
        await axios.put('http://localhost:5000/api/attendance/update-today', payload);
        alert('Attendance updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/attendance', payload);
        alert('Attendance marked successfully!');
        setSubmittedToday(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving attendance');
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
          disabled={submittedToday}
          required
        />
        <select className="border p-2 rounded" value={course} onChange={e => setCourse(e.target.value)} disabled={submittedToday}>
          <option value="">Course</option>
          <option>BTech</option>
          <option>BCA</option>
          <option>MCA</option>
          <option>Pharmacy</option>
          <option>Agriculture</option>
        </select>
        <select className="border p-2 rounded" value={session} onChange={e => setSession(e.target.value)} disabled={submittedToday}>
          <option value="">Session</option>
          <option>2022-2026</option>
          <option>2023-2027</option>
          <option>2024-2028</option>
          <option>2025-2029</option>
        </select>
        <select className="border p-2 rounded" value={branch} onChange={e => setBranch(e.target.value)} disabled={submittedToday}>
          <option value="">Branch</option>
          <option>CSE</option>
          <option>ME</option>
          <option>CSE-AIML</option>
          <option>CE</option>
          <option>EC</option>
        </select>
      </div>

      <table className="w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Present</th>
            <th className="border px-4 py-2">Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
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

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {submittedToday ? 'Update Attendance' : 'Submit Attendance'}
      </button>
      <Link to={'/teacher'}><button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 block mt-2">Back</button></Link>
    </div>
  );
};

export default TeacherMarkAttendance;
