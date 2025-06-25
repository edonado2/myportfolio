import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiCloud, FiSmartphone, 
  FiServer, FiLayers, FiZap, FiShield,
  FiStar, FiAward, FiCheckCircle, FiTrendingUp
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
      { name: 'React.js', level: 'Expert', color: '#61dafb', icon: '⚛️', experience: '3+ years' },
      { name: 'TypeScript', level: 'Advanced', color: '#3178c6', icon: '📘', experience: '2+ years' },
      { name: 'JavaScript (ES6+)', level: 'Expert', color: '#f7df1e', icon: '🟡', experience: '4+ years' },
      { name: 'HTML5 & CSS3', level: 'Expert', color: '#e34f26', icon: '🌐', experience: '4+ years' },
      { name: 'Next.js', level: 'Advanced', color: '#000000', icon: '⚡', experience: '2+ years' },
      { name: 'Tailwind CSS', level: 'Advanced', color: '#06b6d4', icon: '🎨', experience: '2+ years' },
      { name: 'Redux', level: 'Intermediate', color: '#764abc', icon: '📦', experience: '2+ years' },
      { name: 'GraphQL', level: 'Intermediate', color: '#e10098', icon: '🔗', experience: '1+ years' }
    ],
    backend: [
      { name: 'Node.js', level: 'Expert', color: '#339933', icon: '🟢', experience: '3+ years' },
      { name: 'Express.js', level: 'Advanced', color: '#000000', icon: '🚀', experience: '3+ years' },
      { name: 'Python', level: 'Advanced', color: '#3776ab', icon: '🐍', experience: '2+ years' },
      { name: 'Django', level: 'Intermediate', color: '#092e20', icon: '🎯', experience: '1+ years' },
      { name: 'FastAPI', level: 'Intermediate', color: '#009688', icon: '⚡', experience: '1+ years' },
      { name: 'REST APIs', level: 'Advanced', color: '#ff6b6b', icon: '🔌', experience: '3+ years' },
      { name: 'Microservices', level: 'Intermediate', color: '#4ecdc4', icon: '🏗️', experience: '2+ years' },
      { name: 'Serverless', level: 'Intermediate', color: '#ff9ff3', icon: '☁️', experience: '1+ years' }
    ],
    database: [
      { name: 'MongoDB', level: 'Advanced', color: '#47a248', icon: '🍃', experience: '3+ years' },
      { name: 'PostgreSQL', level: 'Advanced', color: '#336791', icon: '🐘', experience: '2+ years' },
      { name: 'Redis', level: 'Intermediate', color: '#dc382d', icon: '🔴', experience: '2+ years' },
      { name: 'MySQL', level: 'Intermediate', color: '#00758f', icon: '🐬', experience: '2+ years' },
      { name: 'Firebase', level: 'Advanced', color: '#ffca28', icon: '🔥', experience: '2+ years' },
      { name: 'Prisma ORM', level: 'Intermediate', color: '#2d3748', icon: '🔧', experience: '1+ years' }
    ],
    cloud: [
      { name: 'AWS', level: 'Advanced', color: '#ff9900', icon: '☁️', experience: '2+ years' },
      { name: 'Docker', level: 'Intermediate', color: '#2496ed', icon: '🐳', experience: '2+ years' },
      { name: 'Kubernetes', level: 'Beginner', color: '#326ce5', icon: '⚓', experience: '1+ years' },
      { name: 'CI/CD', level: 'Intermediate', color: '#f05032', icon: '🔄', experience: '2+ years' },
      { name: 'Terraform', level: 'Intermediate', color: '#7b42bc', icon: '🏗️', experience: '1+ years' },
      { name: 'Google Cloud', level: 'Intermediate', color: '#4285f4', icon: '☁️', experience: '1+ years' }
    ],
    mobile: [
      { name: 'React Native', level: 'Intermediate', color: '#61dafb', icon: '📱', experience: '2+ years' },
      { name: 'Flutter', level: 'Intermediate', color: '#02569b', icon: '🦋', experience: '1+ years' },
      { name: 'Progressive Web Apps', level: 'Advanced', color: '#4285f4', icon: '📲', experience: '2+ years' },
      { name: 'Mobile UI/UX', level: 'Intermediate', color: '#ff6b6b', icon: '🎨', experience: '2+ years' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Expert', color: '#f05032', icon: '📚', experience: '4+ years' },
      { name: 'VS Code', level: 'Expert', color: '#007acc', icon: '💻', experience: '4+ years' },
      { name: 'Figma', level: 'Intermediate', color: '#f24e1e', icon: '🎨', experience: '2+ years' },
      { name: 'Jest Testing', level: 'Intermediate', color: '#c21325', icon: '🧪', experience: '2+ years' },
      { name: 'Webpack', level: 'Intermediate', color: '#1c78c0', icon: '📦', experience: '2+ years' },
      { name: 'Agile/Scrum', level: 'Advanced', color: '#ff6b6b', icon: '🔄', experience: '3+ years' }
    ]
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#3b82f6';
      case 'Intermediate': return '#f59e0b';
      case 'Beginner': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Expert': return <FiStar />;
      case 'Advanced': return <FiTrendingUp />;
      case 'Intermediate': return <FiCheckCircle />;
      case 'Beginner': return <FiAward />;
      default: return <FiCheckCircle />;
    }
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
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                  <div className="skill-level-badge" style={{ backgroundColor: getLevelColor(skill.level) }}>
                    {getLevelIcon(skill.level)}
                    <span>{skill.level}</span>
                  </div>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag" style={{ backgroundColor: skill.color + '20', color: skill.color }}>
                    {skill.name}
                  </span>
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