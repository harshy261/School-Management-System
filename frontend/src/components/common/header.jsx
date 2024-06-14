// ./src/components/Common/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">School ERP</div>
        <div>
          <Link to="/admin" className="mx-2">Admin</Link>
          <Link to="/teacher" className="mx-2">Teacher</Link>
          <Link to="/student" className="mx-2">Student</Link>
          <Link to="/login" className="mx-2">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
