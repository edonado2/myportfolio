import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: 'MERN Stack Developer',
      company: 'Freelance & Personal Projects',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Developing full-stack web applications using MongoDB, Express, React, and Node.js. Building responsive and user-friendly applications for various clients and personal projects.',
      achievements: [
        'Created 36+ projects showcasing diverse technical skills',
        'Built responsive web applications with modern technologies',
        'Implemented TypeScript for better code quality and maintainability',
        'Developed mobile applications using React Native and Expo'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      link: 'https://github.com/edonado2'
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'Personal Development',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Focused on learning and mastering web development technologies, building projects to enhance skills in frontend and backend development.',
      achievements: [
        'Mastered JavaScript, TypeScript, and modern web frameworks',
        'Built various projects including games, APIs, and web applications',
        'Learned mobile development with React Native',
        'Developed Chrome extensions and automation tools'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS'],
      link: 'https://github.com/edonado2'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Computer Engineer',
      school: 'Rafael Belloso Chacin University',
      period: '2021 - Present',
      description: 'Bachelor\'s degree in Computer Engineering, focusing on software development, algorithms, data structures, and computer systems.',
      achievements: [
        'Studying computer engineering fundamentals and software development',
        'Learning advanced programming concepts and system design',
        'Developing problem-solving skills through academic projects',
        'Building a strong foundation in computer science principles'
      ]
    },
    {
      id: 2,
      degree: 'CS50: Introduction to Computer Science',
      school: 'Harvard University (edX)',
      period: '2023',
      description: 'Comprehensive introduction to computer science and programming, covering fundamental concepts and multiple programming languages.',
      achievements: [
        'Mastered C programming language fundamentals',
        'Learned data structures and algorithms',
        'Completed challenging problem sets and final project',
        'Gained strong foundation in computer science principles'
      ]
    },
    {
      id: 3,
      degree: 'CS50P: Programming with Python',
      school: 'Harvard University (edX)',
      period: '2023',
      description: 'Advanced Python programming course focusing on object-oriented programming, testing, and software development best practices.',
      achievements: [
        'Advanced Python programming and OOP concepts',
        'Software testing and debugging techniques',
        'Web development with Flask and Django',
        'Database integration and API development'
      ]
    },
    {
      id: 4,
      degree: 'Self-Taught Developer',
      school: 'Online Learning & Practice',
      period: '2021 - Present',
      description: 'Comprehensive self-directed learning in web development, focusing on MERN stack technologies and modern development practices.',
      achievements: [
        'Mastered MERN Stack (MongoDB, Express, React, Node.js)',
        'Learned TypeScript for type-safe development',
        'Developed mobile applications with React Native',
        'Built 36+ projects demonstrating various skills'
      ]
    }
  ];

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
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My journey in web development, showcasing growth, 
            achievements, and continuous learning in the tech industry.
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="section-subtitle">Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-effect">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h4>{exp.title}</h4>
                        <div className="company-info">
                          <span className="company-name">{exp.company}</span>
                          <div className="company-meta">
                            <span className="location">
                              <FiMapPin />
                              {exp.location}
                            </span>
                            <span className="period">
                              <FiCalendar />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    </div>
                    
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="experience-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="experience-technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-subtitle">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="education-item glass-effect"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <div className="education-meta">
                      <span className="school-name">{edu.school}</span>
                      <span className="education-period">
                        <FiCalendar />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="education-achievements">
                    <h5>Notable Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content glass-effect">
            <h3>Ready to work together?</h3>
            <p>Let's discuss how my experience can benefit your next project.</p>
            <motion.button
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 