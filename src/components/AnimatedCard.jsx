import React, { useState } from 'react';
import '../style/AnimatedCard.css';

import wow1 from '../assets/wow1.png';
import wow2 from '../assets/wow2.png';

const AnimatedCard = ({ primary, secondaryCards = [], imagePosition = 'left' }) => {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const currentSecondary = secondaryCards[index] || null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + secondaryCards.length));
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
          <p className='title'>{currentSecondary.title}</p>
          <img src={currentSecondary.image1} alt='' className='wow1'/>
          <img src={currentSecondary.image} alt="secondary" className={`secondary-img ${currentSecondary.className || ''}`} />
          <img src={currentSecondary.image2} alt='' className='wow2'/>

          {secondaryCards.length >= 1 && (
            <>
              <div className="arrow-container left">
                <button
                  className="arrow-button"
                  onClick={() => {
                    console.log('Decreasing index:', index, '→', index - 1);
                    if (index > 0) setIndex(index - 1);
                  }}
                  disabled={index === 0}
                >
                  ←
                </button>
              </div>

              <div className="arrow-container right">
                <button
                  className="arrow-button"
                  onClick={() => {
                    console.log('Increasing index:', index, '→', index + 1);
                    if (index < secondaryCards.length - 1) setIndex(index + 1);
                  }}
                  disabled={index === secondaryCards.length - 1}
                >
                  →
                </button>
              </div>
            </>
          )}



        </div>
      )}
    </div>
  );
};

export default AnimatedCard;
