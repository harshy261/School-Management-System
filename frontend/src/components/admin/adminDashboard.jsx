// ./src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { auth, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {auth.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
