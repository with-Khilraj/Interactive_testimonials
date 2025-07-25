import React from "react";
import "../style/CourseStatus.css";


const CourseStats = () => {
  return (
    <div className="course-section">
      {/* Heading */}
      <div className="course-heading">
        <p>Explore our classes and master trending skills!</p>
        <h2>
          Dive Into <span>What's Hot Right Now!</span> 🔥
        </h2>
      </div>

      {/* Cards container */}
      <div className="card-grid">
        {/* All Courses Card */}
        <div className="course-card all-courses">
          <div className="course-header">
            <span>View all Courses →</span>
          </div>
          <div className="course-icons">
            <img src='' alt="React" />
            <img src='' alt="Figma" />
            <img src='' alt="Vue" />
            <img src='' alt="PS" />
          </div>
          <div className="course-number">
            <div className="number-wrapper">
              <h1>23</h1>
              <span className="plus-icon">+</span>
            </div>
            <h3>All Courses</h3>
            <p>courses you're powering through right now.</p>
          </div>
        </div>

        {/* Upcoming Courses Card */}
        <div className="card small-card">
          <div className="vertical-text">
            <h4>Upcoming Courses</h4>
            <p>exciting new courses waiting to boost your skills.</p>
          </div>
          <div className="vertical-number">
            <div className="vertical-number-wrapper">
              <h1>05</h1>
              <span className="vertical-plus-icon">+</span>
            </div>
          </div>
        </div>

        {/* Ongoing Courses Card */}
        <div className="card small-card">
          <div className="vertical-text">
            <h4>Ongoing Courses</h4>
            <p>currently happening—don’t miss out on the action!</p>
          </div>
          <div className="vertical-number">
            <div className="vertical-number-wrapper">
              <h1>10</h1>
              <span className="vertical-plus-icon">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
