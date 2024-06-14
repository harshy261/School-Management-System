// ./src/components/Student/StudentDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { auth, logout } = useAuth();

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, {auth.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;
