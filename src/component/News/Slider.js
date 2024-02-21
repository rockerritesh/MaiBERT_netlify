// Slider.js
import React, { useState } from 'react';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {items.slice(currentIndex, currentIndex + 1).map((item, index) => (
          <div key={index} className={`slider-item`}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>&lt; Prev</button>
      <button onClick={handleNext}>Next &gt;</button>
    </div>
  );
};

export default Slider;
