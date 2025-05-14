import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const {backendURL} = useContext(AuthContext);
  const fetchData = async (userType) => {
    try {
      const res = await axios.get(`${backendURL}/api/auth/users/${userType}`);
      setUsers(res.data);
      setFilteredUsers(res.data);
      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to load data check the console.');
    }
  };

  const register = () => {
    navigate('/register');
  };

  useEffect(() => {
    fetchData('admin');
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">CampusConnect</h2>
        <nav>
          <ul className="space-y-3">
            <Link to={'/admin'}><li className="cursor-pointer text-gray-700 hover:text-blue-500">Dashboard</li></Link>
            <br />
            <hr></hr>
            <li className="cursor-pointer text-gray-700 hover:text-blue-500" onClick={() => fetchData('admin')}>Admins</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-500" onClick={() => fetchData('teacher')}>Teachers</li>
            <li className="cursor-pointer text-gray-700 hover:text-blue-500" onClick={() => fetchData('student')}>Students</li>
          </ul>
          <hr className="my-6" />
          <ul>
            <li className="cursor-pointer text-green-600 hover:underline" onClick={register}>+ Add New User</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Manage Users</h1>
          <input
            type="text"
            placeholder="Search by name or email"
            className="border border-gray-300 rounded-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left px-6 py-3">Name</th>
                  <th className="text-left px-6 py-3">Email</th>
                  <th className="text-left px-6 py-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map(user => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600 mt-4">No users found.</p>
        )}
      </main>
    </div>
  );
};

export default AdminUsers;