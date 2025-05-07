import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    rollNo: '',
    branch: '',
    course: '',
    batch: '',
    teacherId: '',
    dept: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      navigate('/admin');
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };

  const { role } = form;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register New {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

        {/* Common Fields */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-input" placeholder="Enter name" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="Enter email" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="form-input" placeholder="Enter password" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Role</label>
          <select name="role" value={role} onChange={handleChange} className="form-input">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Role-based Conditional Fields */}

        {/* Student Fields */}
        {role === 'student' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Roll No</label>
              <input type="text" name="rollNo" value={form.rollNo} onChange={handleChange} className="form-input" placeholder="Enter roll number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Batch</label>
              <input type="text" name="batch" value={form.batch} onChange={handleChange} className="form-input" placeholder="Enter batch year" />
            </div>
          </>
        )}

        {/* Teacher Fields */}
        {role === 'teacher' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Teacher ID</label>
              <input type="text" name="teacherId" value={form.teacherId} onChange={handleChange} className="form-input" placeholder="Enter Teacher ID" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <input type="text" name="dept" value={form.dept} onChange={handleChange} className="form-input" placeholder="Enter department" />
            </div>
          </>
        )}

        {/* Admin & All Roles */}
        {(role === 'admin' || role === 'student' || role === 'teacher') && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Course</label>
              <input type="text" name="course" value={form.course} onChange={handleChange} className="form-input" placeholder="Enter course name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Branch</label>
              <input type="text" name="branch" value={form.branch} onChange={handleChange} className="form-input" placeholder="Enter branch name" />
            </div>
          </>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Register</button>
      </form>
    </div>
  );
};

export default Register;