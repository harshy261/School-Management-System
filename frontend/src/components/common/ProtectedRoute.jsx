// ./src/components/Common/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
