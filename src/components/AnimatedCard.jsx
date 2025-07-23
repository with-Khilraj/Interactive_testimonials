import React, { useState } from 'react';
import '../style/AnimatedCard.css';

const AnimatedCard = ({ primary, secondaryCards = [], imagePosition = 'left' }) => {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const currentSecondary = secondaryCards[index] || null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % secondaryCards.length);
  };

  return (
    <div
      className={`card-wrapper ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setIndex(0);
      }}
    >
      {/* Primary Card */}
      <div className={`card primary-card ${imagePosition === 'right' ? 'image-right' : 'image-left'}`}>
        {imagePosition === 'left' && <img src={primary.image} alt='primary' className='left card-img' />}

        <div className="card-text">
          <h2>{primary.title}</h2>
          <p className="subtitle">{primary.subtitle}</p>
          <p className="description">{primary.description}</p>
        </div>
        {imagePosition === 'right' && <img src={primary.image} alt='primary' className='right card-img' />}
      </div>

      {/* Secondary Card */}
      {currentSecondary && (
        <div className={`card secondary-card ${imagePosition === 'right' ? 'image-right' : 'image-left'}`}>
          <img src={currentSecondary.image} alt="secondary" />
          <h2>{currentSecondary.title}</h2>
          <p className="subtitle">{currentSecondary.subtitle}</p>
          <p className="description">{currentSecondary.description}</p>

          {secondaryCards.length > 1 && (
            <button className="arrow-button" onClick={handleNext}>
              ➡️
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimatedCard;
