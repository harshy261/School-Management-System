// ./src/components/Student/StudentDashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentHeader from './StudentHeader';
import StudentSidebar from './StudentSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const services = [
    { title: 'Access and Update Profile', icon: 'fas fa-user' },
    { title: 'View Notices Board', icon: 'fas fa-bullhorn' },
    { title: 'Pay Fee, Fee History, Fee Receipt', icon: 'fas fa-money-check-alt' },
    { title: 'Exam Report, Results', icon: 'fas fa-file-alt' },
    { title: 'Bonafide, LC, Leave Application', icon: 'fas fa-file-signature' },
    { title: 'Attendance Report', icon: 'fas fa-calendar-check' },
    { title: 'Time Table', icon: 'fas fa-clock' },
    { title: 'Access and Update Profile', icon: 'fas fa-user' },
    { title: 'View Notices Board', icon: 'fas fa-bullhorn' },
    { title: 'Pay Fee, Fee History, Fee Receipt', icon: 'fas fa-money-check-alt' },
    { title: 'Exam Report, Results', icon: 'fas fa-file-alt' },
    { title: 'Bonafide, LC, Leave Application', icon: 'fas fa-file-signature' },
    { title: 'Attendance Report', icon: 'fas fa-calendar-check' },
    { title: 'Time Table', icon: 'fas fa-clock' },
  ];

  return (
    <div className="flex">
      {/* <StudentSidebar /> */}
      <div className="flex-1">
        <StudentHeader />
        {/* Main content area */}
        <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
