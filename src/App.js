import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookingSection from './components/BookingSection';
import GuideSection from './components/GuideSection';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BookingSection />
      <GuideSection />
      <Footer />
    </div>
  );
};

export default App;