import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiExternalLink, FiStar } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [selectedWorld, setSelectedWorld] = useState(null);

  const marioWorlds = [
    {
      id: 1,
      worldName: "World 1-1: Developer's Journey",
      title: 'MERN Stack Developer',
      company: 'Freelance & Personal Projects',
      location: 'Remote',
      period: '2022 - Present',
      description: 'The main adventure begins! Developing full-stack web applications using MongoDB, Express, React, and Node.js.',
      achievements: [
        'Created 36+ projects showcasing diverse technical skills',
        'Built responsive web applications with modern technologies',
        'Implemented TypeScript for better code quality and maintainability',
        'Developed mobile applications using React Native and Expo'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      link: 'https://github.com/edonado2',
      theme: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        ground: '#8B4513',
        clouds: '#87CEEB',
        coins: '#FFD700'
      },
      worldType: 'grassland',
      difficulty: 'Expert',
      stars: 5,
      coins: 36
    },
    {
      id: 2,
      worldName: "World 1-2: Learning Underground",
      title: 'Web Developer',
      company: 'Personal Development',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Venture into the underground tunnels of web development! Focused on learning and mastering web development technologies.',
      achievements: [
        'Mastered JavaScript, TypeScript, and modern web frameworks',
        'Built various projects including games, APIs, and web applications',
        'Learned mobile development with React Native',
        'Developed Chrome extensions and automation tools'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS'],
      link: 'https://github.com/edonado2',
      theme: {
        background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        ground: '#8B7355',
        clouds: '#95A5A6',
        coins: '#F39C12'
      },
      worldType: 'underground',
      difficulty: 'Advanced',
      stars: 4,
      coins: 24
    }
  ];

  const educationWorlds = [
    {
      id: 1,
      worldName: "Castle 1: University Kingdom",
      degree: 'Computer Engineer',
      school: 'Rafael Belloso Chacin University',
      period: '2021 - Present',
      description: 'Enter the grand castle of higher education! Bachelor\'s degree in Computer Engineering.',
      achievements: [
        'Studying computer engineering fundamentals and software development',
        'Learning advanced programming concepts and system design',
        'Developing problem-solving skills through academic projects',
        'Building a strong foundation in computer science principles'
      ],
      theme: {
        background: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)',
        ground: '#D35400',
        clouds: '#BDC3C7',
        coins: '#F1C40F'
      },
      worldType: 'castle',
      difficulty: 'Hard',
      stars: 5,
      coins: 100
    },
    {
      id: 2,
      worldName: "World 2-1: Harvard Forest",
      degree: 'CS50: Introduction to Computer Science',
      school: 'Harvard University (edX)',
      period: '2023',
      description: 'Navigate through the dense forest of computer science!',
      achievements: [
        'Mastered C programming language fundamentals',
        'Learned data structures and algorithms',
        'Completed challenging problem sets and final project',
        'Gained strong foundation in computer science principles'
      ],
      theme: {
        background: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
        ground: '#795548',
        clouds: '#A5D6A7',
        coins: '#FFC107'
      },
      worldType: 'forest',
      difficulty: 'Expert',
      stars: 5,
      coins: 50
    }
  ];

  const handleWorldClick = (world) => {
    setSelectedWorld(world);
  };

  const closeWorld = () => {
    setSelectedWorld(null);
  };

  const renderWorldCard = (world, isEducation = false) => (
    <motion.div
      key={world.id}
      className={`world-card ${world.worldType}`}
      style={{ background: world.theme.background }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: world.id * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
      onClick={() => handleWorldClick(world)}
    >
      <div className="world-header">
        <h3 className="world-name">{world.worldName}</h3>
        <div className="world-stats">
          <span className="difficulty">{world.difficulty}</span>
          <div className="stars">
            {[...Array(world.stars)].map((_, i) => (
              <FiStar key={i} className="star" />
            ))}
          </div>
        </div>
      </div>

      <div className="world-content">
        <div className="world-info">
          <h4>{isEducation ? world.degree : world.title}</h4>
          <p className="institution">{isEducation ? world.school : world.company}</p>
          <div className="period">
            <FiCalendar />
            {world.period}
          </div>
        </div>

        <div className="world-visual">
          <div className="ground" style={{ backgroundColor: world.theme.ground }}></div>
          <div className="clouds">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="cloud" 
                style={{ backgroundColor: world.theme.clouds }}
              ></div>
            ))}
          </div>
          <div className="coins">
            {[...Array(Math.min(world.coins, 5))].map((_, i) => (
              <div 
                key={i} 
                className="coin" 
                style={{ backgroundColor: world.theme.coins }}
              ></div>
            ))}
          </div>
        </div>

        <div className="world-preview">
          <p>{world.description.substring(0, 100)}...</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">🎮 Experience & Education Worlds</h2>
          <p className="section-subtitle">
            Embark on an epic journey through my professional and educational adventures! 
            Each world represents a different chapter in my development story.
          </p>
        </motion.div>

        <div className="worlds-container">
          <motion.div
            className="worlds-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="section-subtitle">🏢 Work Experience Worlds</h3>
            <div className="worlds-grid">
              {marioWorlds.map(world => renderWorldCard(world, false))}
            </div>
          </motion.div>

          <motion.div
            className="worlds-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-subtitle">🎓 Education Worlds</h3>
            <div className="worlds-grid">
              {educationWorlds.map(world => renderWorldCard(world, true))}
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedWorld && (
            <motion.div
              className="world-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWorld}
            >
              <motion.div
                className="world-modal"
                style={{ background: selectedWorld.theme.background }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selectedWorld.worldName}</h2>
                  <button className="close-btn" onClick={closeWorld}>×</button>
                </div>

                <div className="modal-content">
                  <div className="world-details">
                    <div className="world-info-detailed">
                      <h3>{selectedWorld.title || selectedWorld.degree}</h3>
                      <p className="institution">{selectedWorld.company || selectedWorld.school}</p>
                      <div className="meta-info">
                        <span><FiMapPin /> {selectedWorld.location || 'Online'}</span>
                        <span><FiCalendar /> {selectedWorld.period}</span>
                      </div>
                    </div>

                    <div className="world-description">
                      <p>{selectedWorld.description}</p>
                    </div>

                    <div className="world-achievements">
                      <h4>🏆 Achievements</h4>
                      <ul>
                        {selectedWorld.achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {selectedWorld.technologies && (
                      <div className="world-technologies">
                        <h4>🛠️ Technologies</h4>
                        <div className="tech-badges">
                          {selectedWorld.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              className="tech-badge"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="world-stats-detailed">
                      <div className="stat">
                        <span className="stat-label">Difficulty:</span>
                        <span className="stat-value">{selectedWorld.difficulty}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Stars:</span>
                        <div className="stars">
                          {[...Array(selectedWorld.stars)].map((_, i) => (
                            <FiStar key={i} className="star" />
                          ))}
                        </div>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Coins:</span>
                        <span className="stat-value">{selectedWorld.coins}</span>
                      </div>
                    </div>

                    {selectedWorld.link && (
                      <motion.a
                        href={selectedWorld.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="world-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink />
                        View Portfolio
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content glass-effect">
            <h3>🎯 Ready to start a new adventure?</h3>
            <p>Let's discuss how my experience can benefit your next project.</p>
            <motion.button
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start New Quest
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 