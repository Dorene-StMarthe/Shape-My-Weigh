import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import NavigationBar from './components/NavigationBar';
import Features from './components/Features';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';
import './index.css';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

