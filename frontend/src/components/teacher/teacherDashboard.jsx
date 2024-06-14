// ./src/components/Teacher/TeacherDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const TeacherDashboard = () => {
  const { auth, logout } = useAuth();

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>Welcome, {auth.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default TeacherDashboard;
