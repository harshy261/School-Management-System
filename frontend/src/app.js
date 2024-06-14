import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import Login from './components/Auth/Login';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import NotFound from './components/Common/NotFound';
import Button from './common/button';

function App() {
  return (
    <Router>
      <Header />
      <Button/>
      <div className="container mx-auto px-4">
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/teacher" component={TeacherDashboard} />
          <Route path="/student" component={StudentDashboard} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
