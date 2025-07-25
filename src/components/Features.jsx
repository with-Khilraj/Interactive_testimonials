import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import '../style/Features.css';

import clarity from '../assets/clarity.png';
import learning from '../assets/learning.png';
import mentored from '../assets/mentor.png';
import showcase from '../assets/showcase.png';
import clarity2 from '../assets/clarity-2.png';
import learn2 from '../assets/learn-2.png';
import learn3 from '../assets/learn-3.png';
import wow1 from '../assets/wow1.png';
import wow2 from '../assets/wow2.png';

const Features = () => {
  return (
    <div className="journey-container">
      <p className='main-title'>Your SkillShikshya Journey</p>
      <h1><span className="highlight">Step</span> In. <span className="highlight">Skill </span>Up. <span className="highlight">Stand </span>Out. 🚀</h1>

      <div className="grid">
        <AnimatedCard
          primary={{
            title: 'Start with Clarity',
            subtitle: 'Step into a better learning path.',
            description: 'Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you are upskilling or begineer, we have a path tailored to your growth. ',
            image: clarity,
          }}
          secondaryCards={[
            {
              title: 'Clarity unlocked—\nstickers, sips, and skills\nall in one go!',
              image: clarity2,
              image1: wow1,
              image2: wow2,
              className: 'clarity-unlocked'
            }
          ]}
          imagePosition='left'
        />

        <AnimatedCard
          primary={{
            title: 'Learn by Doing',
            subtitle: 'Practical skills, real projects.',
            description: 'Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, and create-leading to true mastery.',
            image: learning,
          }}
          secondaryCards={[
            {
              title: 'Fouces faces—learning\nmode: ON!',
              image: learn2,
              className: 'focus-faces'
            },
            {
              title: 'Laptops, lessons and a whole lot of\ngrowth!',
              image: learn3,
              className: 'lot-of-growth'
            },
          ]}
          imagePosition='right'
        />

        {/* Static Cards */}
        <div className="static-card purple image-left">
          <img className="card-img" src={mentored} alt="Mentored" />
          <div className="card-text">
            <h2>Get Mentored & Supported</h2>
            <p className="subtitle">You're not learning alone.</p>
            <p className="description">
              Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions,
              and expert insights. You’re never on your own.
            </p>
          </div>
        </div>

        <div className="static-card brown image-right">
          <img className="card-img" src={showcase} alt="Showcase" />
          <div className="card-text">
            <h2>Achieve & Showcase</h2>
            <p className="subtitle">Build your portfolio, get job-ready.</p>
            <p className="description">
              Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
