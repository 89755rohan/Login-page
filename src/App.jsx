import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/Loginpage';
import SignupPage from './components/Signuppage'
import SettingPage from './components/SettingPage';
import './App.css'
const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
