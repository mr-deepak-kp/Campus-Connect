import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    rollNo: '',
    branch: 'cse',
    course: 'Btech',
    batch: '2022-2026',
    teacherId: '',
    adminId:'',
    courseAssigned:0,
  });
  const {backendURL} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendURL}/api/auth/register`, form);
      alert("User registered successfully");
      navigate('/admin/users');
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };

  const { role } = form;
  const {course} = form;
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
               <select name="batch" value={form.batch} onChange={handleChange} className="form-input">
               <option value="2022-2026">2022-2026</option>
               <option value="2023-2027">2023-2027</option>
               <option value="2024-2028">2024-2028</option>
               <option value="2025-2029">2025-2029</option>
               </select>
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
              <label className="block text-gray-700">Course Assigned</label>
              <input type="text" name="courseAssigned" value={form.courseAssigned} onChange={handleChange} className="form-input" placeholder="Enter no. of course " />
            </div>
          </>
        )}
        {/* Admin Fields */}
        { (role == 'admin') && (
              <div className="mb-4">
              <label className="block text-gray-700">Admin ID</label>
              <input type="text" name="adminId" value={form.adminId} onChange={handleChange} className="form-input" placeholder="Enter Admin ID" />
            </div>
            )

            }
        {/* Admin & All Roles */}
        {(role === 'admin' || role === 'student' || role === 'teacher') && (
          <>
            <div className="mb-4">
               <label className="block text-gray-700">Course</label>
               <select name="course" value={form.course} onChange={handleChange} className="form-input">
               <option value="Btech">Btech</option>
               <option value="BE">BE</option>
               <option value="Pharmacy">Pharmacy</option>
               <option value="BSE">BSE</option>
               </select>
            </div>
            { (course == "Btech") && (
              <>
              <div className="mb-4">
               <label className="block text-gray-700">Branch</label>
               <select name="branch" value={form.branch} onChange={handleChange} className="form-input">
               <option value="cse">CSE</option>
               <option value="ce">CE</option>
               <option value="me">ME</option>
               <option value="ec">EC</option>
               <option value="ex">EX</option>
               </select>
              </div>
              </>
            )
            }
            
          </>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Register</button>
      </form>
    </div>
  );
};

export default Register;