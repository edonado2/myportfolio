import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'ernestoddonado@gmail.com',
      link: 'mailto:ernestoddonado@gmail.com'
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'github.com/edonado2',
      link: 'https://github.com/edonado2'
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/eddonado',
      link: 'https://linkedin.com/in/eddonado'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Available Worldwide',
      link: null
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('https://formspree.io/f/xkgbpgkl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrors({ submit: 'Failed to send message. Please try again or email directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start a project or have a question? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-info-card glass-effect">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-form-card glass-effect">
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">
                    <FiCheck />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell me about your project or question..."
                      rows="5"
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  {errors.submit && (
                    <div className="error-message submit-error">
                      {errors.submit}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="loading">
                        <div className="spinner"></div>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content glass-effect">
            <h3>Looking for a MERN Stack Developer?</h3>
            <p>I'm available for freelance work, full-time positions, and exciting collaborations.</p>
            <div className="cta-buttons">
              <motion.a
                href="https://github.com/edonado2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="mailto:ernestoddonado@gmail.com"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 