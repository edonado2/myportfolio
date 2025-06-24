import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/edonado2',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/eddonado',
      label: 'LinkedIn'
    },
    {
      icon: FiMail,
      href: 'mailto:ernesto@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3>Ernesto Donado</h3>
              <p>MERN Stack Developer passionate about building responsive web applications and creating innovative solutions.</p>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                }}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Skills & Technologies</h4>
            <div className="footer-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Ernesto Donado. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FiHeart className="heart-icon" /> using React
            </p>
          </div>
        </motion.div>
      </div>

      <motion.button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer; 