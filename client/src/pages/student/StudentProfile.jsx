import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import Sidebar from './StudentSidebar.jsx';
import Topbar from '../../components/Topbar.jsx';
const StudentProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-gray-100">
        {/* Topbar */}
        <Topbar name={user.name} />

        {/* Profile Content */}
        <div className="flex justify-center items-center flex-col flex-grow p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Student Profile</h2>
            <div className="space-y-4 text-lg">
              <p><span className="font-semibold">Name:</span> {user.name}</p>
              <p><span className="font-semibold">Email:</span> {user.email}</p>
              <p><span className="font-semibold">Roll No:</span> {user.rollNo || user.id}</p>
              <p><span className="font-semibold">Course:</span> {user.course || 'N/A'}</p>
              <p><span className="font-semibold">Branch:</span> {user.branch || 'N/A'}</p>
              <p><span className="font-semibold">Batch:</span> {user.batch || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;