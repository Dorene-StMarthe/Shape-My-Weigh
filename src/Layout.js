import NavigationBar from './components/NavigationBar';
import Features from './components/Features';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function Layout() {

  return (
    
    <div>
    <NavigationBar/>
    <Hero/>
    <Features/>
    <Footer/>
    </div>
  );
}

export default Layout;
