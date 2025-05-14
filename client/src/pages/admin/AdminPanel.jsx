import React from 'react';
import AdminSidebar from './AdminSidebar';
import Topbar from '../../components/Topbar.jsx'
const AdminPanel = () => {
  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
      
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar name="Admin" />

        <main className="p-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
            <p className="text-gray-600 mt-2">
              Welcome to the admin panel. Use the sidebar to manage users, attendance, and performance.
            </p>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default AdminPanel;