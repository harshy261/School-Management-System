// ./src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <p>Welcome</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
