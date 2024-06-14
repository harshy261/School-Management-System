// ./src/components/Student/StudentHeader.jsx

import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Assuming AuthContext provides user information
import { Link } from 'react-router-dom';

const StudentHeader = () => {
  const { currentUser, logout } = useAuth(); // Fetch current user information and logout function from context

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from AuthContext
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <img src="../../src/assets/images/student.png" alt="Profile" className="h-12 w-12 rounded-full mr-2" />
        <div>
          <h1 className="text-lg font-semibold">Harsh</h1>
          <p className="text-sm">123</p>
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/student/edit-profile" className="text-white hover:text-gray-300 mr-4">
          Edit Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default StudentHeader;
