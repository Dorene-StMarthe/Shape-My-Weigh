import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage'; // Verify the path to the Homepage component
import Login from './pages/Login'; // Verify the path to the Login component
import './App.css'; // Verify the path to your CSS files
import './index.css'; // Verify the path to your CSS files

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ensure the path '/' is correct and matches the URL */}
          <Route exact path="/" element={<Homepage />} /> 
          {/* Ensure the path '/login' is correct and matches the URL */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

