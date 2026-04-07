import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Link } from 'lucide-react';
import './ContactFooter.css';

const ContactFooter = () => {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ state: 'sending', message: 'Sending...' });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ state: 'success', message: 'Thank you! Your message has been sent successfully.' });
      e.target.reset();
      
      setTimeout(() => {
        setFormStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <motion.div 
          className="contact-container glass-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="contact-info">
            <h2>Let's build something <span className="gradient-text">incredible</span>.</h2>
            <p>Ready to revolutionize your workflow? Get in touch with our team today and let's discuss your unique challenges.</p>
            
            <div className="contact-details">
              <div className="detail-item hover-lift">
                <MapPin size={24} className="accent-text" /> 
                <span className="text">100 Innovation Drive, Tech Valley, CA</span>
              </div>
              <div className="detail-item hover-lift">
                <Mail size={24} className="accent-text" /> 
                <span className="text">hello@nexis.ai</span>
              </div>
              <div className="detail-item hover-lift">
                <Phone size={24} className="accent-text" /> 
                <span className="text">+1 (555) 019-2831</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary glow-effect"
              disabled={formStatus.state === 'sending'}
              style={{ opacity: formStatus.state === 'sending' ? 0.7 : 1 }}
            >
              {formStatus.state === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.message && (
              <div className="form-status" style={{ color: formStatus.state === 'success' ? '#10b981' : 'inherit' }}>
                {formStatus.message}
              </div>
            )}
          </form>
        </motion.div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Nexis<span className="accent-dot">.</span></div>
            <p>Innovating the future of enterprise software.</p>
            <div className="social-links">
              <a href="#" aria-label="Website"><Link size={20} /></a>
              <a href="#" aria-label="Contact"><Mail size={20} /></a>
            </div>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#solutions">Solutions</a>
            <a href="#team">Team</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Nexis Technologies Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
