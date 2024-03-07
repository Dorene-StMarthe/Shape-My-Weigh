import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage'; // Verify the path to the Homepage component
import Login from './pages/Login'; // Verify the path to the Login component
import './App.css'; // Verify the path to your CSS files
import './index.css'; // Verify the path to your CSS files
import ReviewPage from './pages/ReviewPage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Ensure the path '/' is correct and matches the URL */}
          <Route exact path="/" element={<Homepage />} /> 
          {/* Ensure the path '/login' is correct and matches the URL */}
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<ReviewPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

