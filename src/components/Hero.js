import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ernesto Donado
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              MERN Stack Developer
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Computer Engineering graduated at Rafael Belloso Chacin University and MERN Stack Developer. 
              Passionate about building responsive web applications with modern technologies. 
              Specialized in MongoDB, Express, React, and Node.js. 
              Creating innovative solutions that deliver exceptional user experiences.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                className="btn btn-secondary"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="hero-card">
              <div className="card-content">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="window-title">portfolio.js</span>
                  </div>
                  <div className="code-content">
                    <pre>
                      <code>
{`const developer = {
  name: "Ernesto Donado",
  role: "MERN Stack Developer",
  education: "Bs. Computer Engineering ",
  university: "Rafael Belloso Chacin University",
  certifications: ["CS50", "CS50P"],
  skills: ["React", "Node.js", "MongoDB", "Express"],
  passion: "Building responsive web apps",
  location: "Available Worldwide"
};

console.log("Let's build something amazing!");`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/edonado2"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/eddonado"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin />
          </motion.a>
          
          <motion.a
            href="mailto:ernesto@example.com"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 