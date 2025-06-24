import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiCloud, FiSmartphone, 
  FiServer, FiLayers, FiZap, FiShield 
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: FiCode },
    { id: 'backend', name: 'Backend', icon: FiServer },
    { id: 'database', name: 'Database', icon: FiDatabase },
    { id: 'cloud', name: 'Cloud & DevOps', icon: FiCloud },
    { id: 'mobile', name: 'Mobile', icon: FiSmartphone },
    { id: 'tools', name: 'Tools & Others', icon: FiLayers }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 95, color: '#61dafb' },
      { name: 'TypeScript', level: 90, color: '#3178c6' },
      { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e' },
      { name: 'HTML5 & CSS3', level: 90, color: '#e34f26' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
      { name: 'Redux', level: 80, color: '#764abc' },
      { name: 'GraphQL', level: 75, color: '#e10098' }
    ],
    backend: [
      { name: 'Node.js', level: 92, color: '#339933' },
      { name: 'Express.js', level: 90, color: '#000000' },
      { name: 'Python', level: 85, color: '#3776ab' },
      { name: 'Django', level: 80, color: '#092e20' },
      { name: 'FastAPI', level: 75, color: '#009688' },
      { name: 'REST APIs', level: 90, color: '#ff6b6b' },
      { name: 'Microservices', level: 82, color: '#4ecdc4' },
      { name: 'Serverless', level: 78, color: '#ff9ff3' }
    ],
    database: [
      { name: 'MongoDB', level: 88, color: '#47a248' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'Redis', level: 80, color: '#dc382d' },
      { name: 'MySQL', level: 82, color: '#00758f' },
      { name: 'Firebase', level: 85, color: '#ffca28' },
      { name: 'Prisma ORM', level: 78, color: '#2d3748' }
    ],
    cloud: [
      { name: 'AWS', level: 85, color: '#ff9900' },
      { name: 'Docker', level: 80, color: '#2496ed' },
      { name: 'Kubernetes', level: 70, color: '#326ce5' },
      { name: 'CI/CD', level: 82, color: '#f05032' },
      { name: 'Terraform', level: 75, color: '#7b42bc' },
      { name: 'Google Cloud', level: 78, color: '#4285f4' }
    ],
    mobile: [
      { name: 'React Native', level: 80, color: '#61dafb' },
      { name: 'Flutter', level: 75, color: '#02569b' },
      { name: 'Progressive Web Apps', level: 85, color: '#4285f4' },
      { name: 'Mobile UI/UX', level: 78, color: '#ff6b6b' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, color: '#f05032' },
      { name: 'VS Code', level: 95, color: '#007acc' },
      { name: 'Figma', level: 75, color: '#f24e1e' },
      { name: 'Jest Testing', level: 80, color: '#c21325' },
      { name: 'Webpack', level: 75, color: '#1c78c0' },
      { name: 'Agile/Scrum', level: 85, color: '#ff6b6b' }
    ]
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit of modern technologies and frameworks 
            that I use to build exceptional digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="category-tabs">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="skills-grid">
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-effect"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <motion.div
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-highlights"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="highlights-grid">
            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FiZap />
              </div>
              <h3>Performance Optimization</h3>
              <p>Expert in optimizing applications for speed, scalability, and user experience.</p>
            </div>
            
            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FiShield />
              </div>
              <h3>Security Best Practices</h3>
              <p>Implementing robust security measures and following industry standards.</p>
            </div>
            
            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FiLayers />
              </div>
              <h3>Modern Architecture</h3>
              <p>Building scalable, maintainable applications with modern design patterns.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 