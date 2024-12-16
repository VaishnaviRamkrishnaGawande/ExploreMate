import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  'https://t3.ftcdn.net/jpg/03/22/52/98/360_F_322529875_xskoq6Pg8vzxnDR3FNigstBWZAC2g14U.jpg', 
  'https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFufGVufDB8fDB8fHww',
  'https://static.vecteezy.com/system/resources/previews/011/084/232/non_2x/full-picture-of-hawa-mahal-of-rajasthan-photo.jpg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <h1>Your Adventure Awaits</h1>
      <button className="explore-button">Explore Now</button>
    </div>
  );
};

export default HeroSection;