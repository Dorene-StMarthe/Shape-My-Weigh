import React from 'react';
import NavigationBar from '../components/NavigationBar'
import Features from '../components/Features';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import '../App.css';
import '../index.css';

function Homepage() {

  return (
    
    <div>
        
        <Hero/>
        <Features/>
       
    </div>
  );
}

export default Homepage;