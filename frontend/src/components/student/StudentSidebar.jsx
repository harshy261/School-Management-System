// ./src/components/Student/StudentSidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <nav>
        <ul>
          <li>
            <NavLink to="/student/profile" activeClassName="font-bold">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/attendance" activeClassName="font-bold">
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/fees" activeClassName="font-bold">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/exams" activeClassName="font-bold">
              Exams
            </NavLink>
          </li>
          {/* Add more NavLink items as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default StudentSidebar;
