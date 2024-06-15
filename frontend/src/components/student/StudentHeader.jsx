// ./src/components/Student/StudentHeader.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Assuming AuthContext provides user information
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'; 

const StudentHeader = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Fetch current user information and logout function from context

  const notificationCount = 2;
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
        {/* Notification Icon */}
        <Link to="/student/MyNotifications" className="text-white mr-4 hover:text-gray-300 relative">
          <FontAwesomeIcon icon={faBell} className="text-3xl" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
              {notificationCount}
            </span>
          )}
        </Link>
        {/* Edit Profile Button */}
        <button
          onClick={handleEditProfile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Edit Profile
        </button>
        {/* Logout Button */}
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
