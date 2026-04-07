import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2>Who We Are</h2>
        <p>Our mission is to democratize advanced technology for businesses across the globe.</p>
      </motion.div>
      
      <motion.div 
        className="about-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="about-text glass-panel" variants={itemVariants}>
          <h3>Driven by <span className="accent-text">Innovation</span></h3>
          <p>Founded in 2026, Nexis represents a paradigm shift in how we think about automation and data synthesis. Our team of world-class engineers is dedicated to building robust, intuitive platforms.</p>
          <div className="stats">
            <motion.div className="stat hover-lift" variants={itemVariants}>
              <span className="number gradient-text">10M+</span>
              <span className="label">Data Points Processed</span>
            </motion.div>
            <motion.div className="stat hover-lift" variants={itemVariants}>
              <span className="number gradient-text">99.9%</span>
              <span className="label">Uptime Guaranteed</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
