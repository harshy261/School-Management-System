// ./src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to School ERP</h1>
      <h3 className="font-bold mb-8">Are You?</h3>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/admin/login" className="glassmorphism-card">
          Admin
        </Link>
        <Link to="/teacher/login" className="glassmorphism-card">
          Teacher 
        </Link>
        <Link to="/student/login" className="glassmorphism-card">
          Student
        </Link>
      </div>
    </div>
  );
};

export default Home;
