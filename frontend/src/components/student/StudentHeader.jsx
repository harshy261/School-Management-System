// ./src/components/Student/StudentHeader.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Assuming AuthContext provides user information
import { Link } from 'react-router-dom';

const StudentHeader = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Fetch current user information and logout function from context

  const handleEditProfile = () => {
    navigate('/student/UpdateProfile');
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from AuthContext
      navigate('/'); // Navigate to the home page after logout
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <img src="" alt="Profile" className="h-12 w-12 rounded-full mr-2" />
        <div>
          <h1 className="text-lg font-semibold">Harsh</h1>
          <p className="text-sm">123</p>
        </div>
      </div>
      <div className="flex items-center">
      <button
          onClick={handleEditProfile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default StudentHeader;
