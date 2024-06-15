// ./src/components/Student/EditProfile.jsx

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Assuming AuthContext provides user information
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UpdateProfile = () => {
  const { currentUser } = useAuth(); // Fetch current user information from context
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [profile, setProfile] = useState({
    fullName: currentUser?.name || 'Harsh Sharma',
    gender: currentUser?.gender || 'Male',
    fathersName: currentUser?.fathersName || 'Ramesh Sharma',
    birthday: currentUser?.birthday || '2000-01-01',
    adhaarNumber: currentUser?.adhaarNumber || '1234-5678-9101',
    religion: currentUser?.religion || 'Hindu',
    address: currentUser?.address || '123, ABC Street, XYZ City',
    contactNo: currentUser?.contactNo || '9876543210',
    fathersContactNo: currentUser?.fathersContactNo || '9876543210',
    fathersEmail: currentUser?.fathersEmail || 'ramesh@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile logic goes here
    console.log('Profile updated:', profile);
    // Navigate back to the student dashboard after saving changes
    navigate('/student');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div>
              <label className="block text-gray-700">Profile Image</label>
              <img src="../../src/assets/images/student.png" alt="Profile" className="h-24 w-24 rounded-full mb-2" />
              <input
                type="file"
                name="profileImage"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                className="w-full border border-gray-300 rounded-md p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <input
                type="text"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fathers Name</label>
              <input
                type="text"
                name="fathersName"
                value={profile.fathersName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Birthday</label>
              <input
                type="date"
                name="birthday"
                value={profile.birthday}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Adhaar Number</label>
              <input
                type="text"
                name="adhaarNumber"
                value={profile.adhaarNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Religion</label>
              <input
                type="text"
                name="religion"
                value={profile.religion}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Academic Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Class</label>
              <input
                type="text"
                value={currentUser?.class || '10th Grade'}
                className="w-full border border-gray-300 rounded-md p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Enroll No</label>
              <input
                type="text"
                value={currentUser?.enrollNo || '123456'}
                className="w-full border border-gray-300 rounded-md p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Date of Admission</label>
              <input
                type="text"
                value={currentUser?.dateOfAdmission || '2015-06-15'}
                className="w-full border border-gray-300 rounded-md p-2"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact No</label>
              <input
                type="text"
                name="contactNo"
                value={profile.contactNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fathers Contact No</label>
              <input
                type="text"
                name="fathersContactNo"
                value={profile.fathersContactNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fathers Email ID</label>
              <input
                type="email"
                name="fathersEmail"
                value={profile.fathersEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
