import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: FiCode, number: '36+', label: 'Projects Created' },
    { icon: FiUsers, number: '3+', label: 'Years Experience' },
    { icon: FiTrendingUp, number: '15+', label: 'Technologies' },
    { icon: FiAward, number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            MERN stack developer passionate about building responsive web applications 
            and creating innovative solutions with modern technologies.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-card glass-effect">
              <h3>Who I Am</h3>
              <p>
                I'm Ernesto Donado, a Computer Engineering student at Rafael Belloso Chacin University 
                and a MERN stack developer passionate about creating responsive and user-friendly web applications. 
                With expertise in MongoDB, Express, React, and Node.js, I specialize in building 
                full-stack solutions that solve real-world problems.
              </p>
              <p>
                My journey in web development started with a curiosity about how 
                modern applications work. Today, I'm dedicated to creating 
                scalable, maintainable code and delivering exceptional user experiences 
                that make a difference, combining my academic foundation with practical development skills.
              </p>
            </div>

            <div className="about-card glass-effect">
              <h3>My Approach</h3>
              <p>
                I believe in writing clean, efficient code and following industry best practices. 
                My development process focuses on user-centered design, performance optimization, 
                and creating applications that are both functional and beautiful.
              </p>
              <p>
                I'm constantly learning and staying updated with the latest technologies 
                and frameworks to provide cutting-edge solutions for my clients and projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card glass-effect"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-skills-preview"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="skills-preview-card glass-effect">
            <h3>Quick Facts</h3>
            <div className="facts-grid">
              <div className="fact">
                <strong>Education:</strong> Computer Engineering Student
              </div>
              <div className="fact">
                <strong>University:</strong> Rafael Belloso Chacin University
              </div>
              <div className="fact">
                <strong>Certifications:</strong> CS50, CS50P (Harvard)
              </div>
              <div className="fact">
                <strong>Languages:</strong> JavaScript, TypeScript, Python
              </div>
              <div className="fact">
                <strong>Frontend:</strong> React, HTML, CSS, Tailwind
              </div>
              <div className="fact">
                <strong>Backend:</strong> Node.js, Express, MongoDB
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 