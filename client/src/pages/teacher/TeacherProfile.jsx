import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import Topbar from '../../components/Topbar.jsx';
import TeacherSidebar from './TeacherSidebar.jsx';
const TeacherProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Topbar name={user.name} />
        <main className="p-6">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Teacher Profile</h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <strong>Name:</strong> <span>{user.name}</span>
              </div>
              <div>
                <strong>Email:</strong> <span>{user.email}</span>
              </div>
              <div>
                <strong>Teacher ID:</strong> <span>{user.teacherId || 'N/A'}</span>
              </div>
              <div>
                <strong>Course:</strong> <span>{user.course}</span>
              </div>
              <div>
                <strong>Role:</strong> <span>{user.role}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherProfile;