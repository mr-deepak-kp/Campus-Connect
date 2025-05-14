// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.jsx';

import Login from './pages/Login.jsx';
import Register from './pages/admin/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import TeacherPanel from './pages/teacher/TeacherPanel.jsx';
import StudentPanel from './pages/student/StudentPanel.jsx';
import AdminPanel from './pages/admin/AdminPanel.jsx';
import StudentAttendance from './pages/student/StudentAttendance.jsx';
import StudentProfile from './pages/student/StudentProfile.jsx';
import TeacherMarkAttendance from './pages/teacher/TeacherMarkAttendance.jsx';
import TeacherProfile from './pages/teacher/TeacherProfile.jsx';
import AdminProfile from './pages/admin/AdminProfile.jsx';
import AdminAttendance from './pages/admin/AdminAttendance.jsx';
import AdminUsers from './pages/admin/AdminUsers.jsx';
import Home from './pages/Home.jsx';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const path = window.location.pathname;

  if (!user) return <Navigate to="/login" />;

  const rolePathMap = {
    student: "/student",
    teacher: "/teacher",
    admin: "/admin"
  };

  const requiredPrefix = rolePathMap[user.role];

  if (!path.startsWith(requiredPrefix) && path !== "/dashboard" && path !== "/register") {
    return <Navigate to={requiredPrefix} />;
  }

  return children;
};

const AdminOnlyRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user && user.role === "admin" ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/*  Home and Public Pages */}
        <Route path="/*" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path='/forgot' element={<Login/>} />
        <Route path="/register" element={
          <AdminOnlyRoute>
            <Register />
          </AdminOnlyRoute>
        } />

        {/*  Secure Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

        <Route path="/student" element={<PrivateRoute><StudentPanel /></PrivateRoute>} />
        <Route path="/student/attendance" element={<PrivateRoute><StudentAttendance /></PrivateRoute>} />
        <Route path="/student/profile" element={<PrivateRoute><StudentProfile /></PrivateRoute>} />
        <Route path="/student/*" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>

        <Route path="/teacher" element={<PrivateRoute><TeacherPanel /></PrivateRoute>} />
        <Route path="/teacher/mark" element={<PrivateRoute><TeacherMarkAttendance /></PrivateRoute>} />
        <Route path="/teacher/profile" element={<PrivateRoute><TeacherProfile /></PrivateRoute>} />
        <Route path="/teacher/*" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>

        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path="/admin/profile" element={<PrivateRoute><AdminProfile /></PrivateRoute>} />
        <Route path="/admin/attendance" element={<PrivateRoute><AdminAttendance /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute><AdminUsers /></PrivateRoute>} />
        <Route path="/admin/*" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}/>
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;