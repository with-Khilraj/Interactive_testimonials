import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import '../style/Features.css';

import clarity from '../assets/clarity.png';
import learning from '../assets/learning.png';  
import mentored from '../assets/mentor.png';
import showcase from '../assets/showcase.png';

const Features = () => {
  return (
    <div className="journey-container">
      <h2>Your SkillShikshya Journey</h2>
      <h1><span className="highlight">Step In.</span> <span className="highlight">Skill Up.</span> <span className="highlight">Stand Out.</span> 🚀</h1>

      <div className="grid">
        <AnimatedCard
          primary={{
            title: 'Start with Clarity',
            subtitle: 'Step into a better learning path.',
            description: 'Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start...',
            image: clarity,
          }}
          secondaryCards={[
            {
              title: 'Clarity Boosted',
              subtitle: 'No confusion. Just direction.',
              description: 'We analyze your strengths and goals to suggest the best possible roadmap...',
              image: '/images/clarity-2.png',
            }
          ]}
        />

        <AnimatedCard
          primary={{
            title: 'Learn by Doing',
            subtitle: 'Practical skills, real projects.',
            description: 'Theory is great, but action is better. At SkillShikshya, you learn by doing...',
            image: learning,
          }}
          secondaryCards={[
            {
              title: 'Hands-on Action',
              subtitle: 'Projects that matter.',
              description: 'You’ll build, break, and create in real-world scenarios.',
              image: '/images/learn-2.png',
            },
            {
              title: 'Real Skills Gained',
              subtitle: 'Job-ready results.',
              description: 'Your projects showcase your talent and preparation.',
              image: '/images/learn-3.png',
            },
          ]}
        />

        {/* Static Cards */}
        <div className="static-card purple">
          <img src={mentored} alt="Mentored" />
          <h2>Get Mentored & Supported</h2>
          <p className="subtitle">You're not learning alone.</p>
          <p className="description">
            SkillShikshya’s mentors and peers have your back with support, live discussions, and insights.
          </p>
        </div>

        <div className="static-card brown">
          <img src={showcase} alt="Showcase" />
          <h2>Achieve & Showcase</h2>
          <p className="subtitle">Build your portfolio, get job-ready.</p>
          <p className="description">
            Your final projects build a strong portfolio, ready to impress recruiters or launch your venture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
