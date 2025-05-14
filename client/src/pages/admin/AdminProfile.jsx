import React, { useContext } from 'react';
import AdminSidebar from './AdminSidebar';
import Topbar from '../../components/Topbar';
import { AuthContext } from '../../context/AuthContext';

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar name={user?.name || 'Admin'} />

        <main className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Profile</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{user?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Admin ID:</span>
                <span>{user?.adminId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Course:</span>
                <span>{user?.course || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Branch:</span>
                <span>{user?.branch || 'N/A'}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProfile;
