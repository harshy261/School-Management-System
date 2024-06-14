// ./src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './pages/Home';
import Footer from './components/Common/Footer';
import NotFound from './components/Common/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login role="admin" />} />
          <Route path="/teacher/login" element={<Login role="teacher" />} />
          <Route path="/student/login" element={<Login role="student" />} />
          <Route path="/admin/register" element={<Register role="admin" />} />
          <Route path="/teacher/register" element={<Register role="teacher" />} />
          <Route path="/student/register" element={<Register role="student" />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
