import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiGithub, FiExternalLink, FiCode, FiDatabase, FiCloud, 
  FiSmartphone, FiLayers, FiZap, FiShield, FiStar,
  FiTool, FiMessageCircle, FiPlay, FiChrome,
  FiCalendar, FiCheckSquare, FiDroplet, FiCpu
} from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'api', name: 'APIs & Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Brillito App',
      description: 'A comprehensive cleaning services application built with TypeScript and modern web technologies. Features include service booking, real-time tracking, and user management.',
      category: 'fullstack',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/edonado2/brillito-app',
      live: 'https://idyllic-pasca-873ae2.netlify.app/',
      featured: true,
      cover: {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: FiTool,
        pattern: 'sparkles',
        color: '#667eea'
      }
    },
    {
      id: 2,
      title: 'Aqua Nova',
      description: 'Expo mobile application for requesting and managing deliveries. Built with React Native and TypeScript for cross-platform compatibility.',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
      github: 'https://github.com/edonado2/aqua-nova',
      live: 'https://github.com/edonado2/aqua-nova',
      featured: true,
      cover: {
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: FiSmartphone,
        pattern: 'waves',
        color: '#4facfe'
      }
    },
    {
      id: 3,
      title: 'Schedule App',
      description: 'Full-stack application to manage appointments using React/TypeScript frontend with Node.js and MongoDB backend.',
      category: 'fullstack',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/edonado2/schedule-app',
      live: 'https://github.com/edonado2/schedule-app',
      featured: true,
      cover: {
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        icon: FiCalendar,
        pattern: 'dots',
        color: '#fa709a'
      }
    },
    {
      id: 4,
      title: 'Organizer App',
      description: 'Task and routine management application built with Vite, React, Tailwind CSS, and GraphQL backend for efficient data management.',
      category: 'web',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'GraphQL'],
      github: 'https://github.com/edonado2/organizer-app',
      live: 'https://github.com/edonado2/organizer-app',
      featured: false,
      cover: {
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        icon: FiCheckSquare,
        pattern: 'grid',
        color: '#a8edea'
      }
    },
    {
      id: 5,
      title: 'Chroma Social Media',
      description: 'A unique social media app based on colors for user interaction. Built with TypeScript and modern web technologies.',
      category: 'web',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/edonado2/chroma-social-media',
      live: 'https://github.com/edonado2/chroma-social-media',
      featured: false,
      cover: {
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        icon: FiDroplet,
        pattern: 'circles',
        color: '#ff9a9e'
      }
    },
    {
      id: 6,
      title: 'GPT Chat App',
      description: 'AI-powered chatbot using OpenAI LLM with TypeScript implementation for intelligent conversation capabilities.',
      category: 'web',
      technologies: ['TypeScript', 'React', 'OpenAI API', 'Node.js'],
      github: 'https://github.com/edonado2/gpt-chat-app',
      live: 'https://github.com/edonado2/gpt-chat-app',
      featured: false,
      cover: {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: FiCpu,
        pattern: 'neural',
        color: '#667eea'
      }
    },
    {
      id: 7,
      title: 'Web Scraping Chrome Extension',
      description: 'Powerful Chrome extension to scrape images, text, and links from any website with TypeScript implementation.',
      category: 'web',
      technologies: ['TypeScript', 'Chrome Extension API', 'Web Scraping'],
      github: 'https://github.com/edonado2/web-scrapping-chrome-extension',
      live: 'https://github.com/edonado2/web-scrapping-chrome-extension',
      featured: false,
      cover: {
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        icon: FiChrome,
        pattern: 'hexagons',
        color: '#ffecd2'
      }
    },
    {
      id: 8,
      title: 'Super Mario Bros Game',
      description: 'Browser version of the popular NES Super Mario Bros game built entirely with JavaScript and HTML5 Canvas.',
      category: 'web',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Game Development'],
      github: 'https://github.com/edonado2/super-mailo-bros-game',
      live: 'https://github.com/edonado2/super-mailo-bros-game',
      featured: false,
      cover: {
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        icon: FiPlay,
        pattern: 'pixels',
        color: '#ff9a9e'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return <FiCode />;
      case 'mobile': return <FiSmartphone />;
      case 'api': return <FiDatabase />;
      case 'fullstack': return <FiLayers />;
      default: return <FiCode />;
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work, demonstrating my skills in MERN stack development, 
            mobile applications, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="filter-tabs">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-cover" style={{ background: project.cover.gradient }}>
                <div className={`cover-pattern ${project.cover.pattern}`}></div>
                <div className="cover-icon">
                  <project.cover.icon />
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </div>
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <FiStar />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="cta-content glass-effect">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Let's collaborate to bring your ideas to life with cutting-edge technology 
              and exceptional user experiences.
            </p>
            <motion.button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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

export default Projects; 