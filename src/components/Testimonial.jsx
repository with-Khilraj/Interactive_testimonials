import React, { useState } from "react";
import "../style/FirstSection.css";

// GIFs
import happy_gif from "../assets/happy_gif.gif";
import like_gif from "../assets/like_gif.gif";
import love_gif from "../assets/love_gif.gif";
import trophy_gif from "../assets/trophy_gif.gif";

// User Photos
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

const photos = [
  { src: user1, alt: "User 1", class: "photo-1" },
  { src: user2, alt: "User 2", class: "photo-2" },
  { src: user3, alt: "User 3", class: "photo-3" },
  { src: user4, alt: "User 4", class: "photo-4" },
  { src: user5, alt: "User 5", class: "photo-5" },
  { src: user6, alt: "User 6", class: "photo-6" },
];

const TestimonialCard = ({ visible, text, name, occupation }) => {
  if (!visible) return null;
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <span className="author-name">{name}</span>
        <span className="author-title">{occupation}</span>
      </div>
    </div>
  );
};

const TestimoniaFirstSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredPhoto1, setHoveredPhoto1] = useState(false);
  const [hoveredPhoto4, setHoveredPhoto4] = useState(false);
  const [animationDirection, setAnimationDirectin] = useState(true);

  const handleExpand = () => {
    setExpanded(true);
    setAnimationDirectin((prev) => !prev);
  }

  return (
    <section
      className={`cluster-container ${expanded ? "expanded" : ""}`}
      onMouseEnter={handleExpand}
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredPhoto1(false);
        setHoveredPhoto4(false);
      }}
    >
      {/* Center Text */}
      <div className="center-text">
        <h2 className="title">Hear How They Level Up Their Game!</h2>
        <h1 className="main-title">Skill <span>masters</span> Unite! 🤝</h1>
        <button className="view-button">View all Testimonials</button>
      </div>

      {/* GIFs */}
      <div className={`gif gif-1 ${expanded ? "expand" : ""}`}>
        <img src={like_gif} alt="GIF 1" />
      </div>

      <div className={`gif gif-2 ${expanded ? "expand" : ""}`}>
        <img src={love_gif} alt="GIF 2" />
      </div>

      <div className={`gif gif-3 ${expanded ? "expand" : ""}`}>
        <img src={trophy_gif} alt="GIF 3" />
      </div>

      <div className={`gif gif-4 ${expanded ? "expand" : ""}`}>
        <img src={happy_gif} alt="GIF 4" />
      </div>

      {/* Photos */}
      {photos.map((photo, idx) => {
        const isPhoto1 = photo.class === "photo-1";
        const isPhoto4 = photo.class === "photo-4";

        return (
          <div
            key={idx}
            className={`photo-wrapper ${photo.class}`}
            onMouseEnter={() => {
              if (isPhoto1) setHoveredPhoto1(true);
              if (isPhoto4) setHoveredPhoto4(true);
            }}
            onMouseLeave={() => {
              if (isPhoto1) setHoveredPhoto1(false);
              if (isPhoto4) setHoveredPhoto4(false);
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={`photo ${photo.class} ${expanded ? "expand" : ""}`}
            />

            {/* Conditional Fade-in Text from photo-1 */}
            {isPhoto1 && hoveredPhoto1 && (
               <TestimonialCard
                visible={true}
                text="I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. 
                The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided 
                within a short time after each class, which made revision very easy and beneficial. I have enthusiastically recommended the same 
                course to my friends."
                name="Rajesh Dhakal"
                occupation="Digital Marketing Student"
              />
            )}

            {/* Conditional Fade-in Video from photo-4 */}
            {isPhoto4 && hoveredPhoto4 && (
              <video
                className="fade-in-video"
                src="/path-to-video.mp4"
                autoPlay
                muted
                loop
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default TestimoniaFirstSection;
