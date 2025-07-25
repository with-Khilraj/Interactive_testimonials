import React, { useState } from "react";
import "../style/CourseStatus.css";


const cardData = [
  {
    title: "All Courses",
    count: "25",
    desc: "courses you're powering\nthrough right now.",
    bgColor: "#d43c3c",
    color: "white",
    icons: [],
  },
  {
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    bgColor: "#fdeef0",
    color: "#b42828",
    icons: [],
  },
  {
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don’t miss out on the action!",
    bgColor: "#fdeef0",
    color: "#b42828",
    icons: [],
  },
];

const CourseStats = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="course-section">
      <div className="course-heading">
        <p>Explore our classes and master trending skills!</p>
        <h2>
          Dive Into <span>What's Hot Right Now!</span> 🔥
        </h2>
      </div>

      <div className="card-grid">
        {cardData.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`course-card ${isActive ? "all-courses" : "small-card"}`}
              style={{ backgroundColor: card.bgColor, color: card.color }}
              onClick={() => handleCardClick(index)}
            >
              {isActive ? (
                <>
                  <div className="course-header">
                    <span>View all Courses →</span>
                  </div>
                  {card.icons.length > 0 && (
                    <div className="course-icons">
                      {card.icons.map((icon, i) => (
                        <img key={i} src={icon} alt="icon" />
                      ))}
                    </div>
                  )}
                  <div className="course-number">
                    <div className="number-wrapper">
                      <h1>{card.count}</h1>
                      <span className="plus-icon">+</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="vertical-text">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                  <div className="vertical-number">
                    <div className="vertical-number-wrapper">
                      <h1>{card.count}</h1>
                      <span className="vertical-plus-icon">+</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseStats;
