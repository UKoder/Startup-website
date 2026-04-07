import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import heroImg from '../assets/hero.png';

const HeroSection = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <header className="hero" id="home">
      <div className="blob-bg pos-1"></div>
      <div className="blob-bg pos-2"></div>
      
      <div className="hero-content">
        <motion.h1 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          Building the <br/>
          <span className="gradient-text">Next Generation</span><br/>
          of Software
        </motion.h1>
        
        <motion.p 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          We solve complex enterprise challenges with elegant, scalable AI-driven solutions. Welcome to the future of innovation.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <a href="#solutions" className="btn btn-primary glow-effect">Discover How</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        <div className="image-wrapper glass-panel">
          <img src={heroImg} alt="Futuristic abstract representation of Nexis software solutions" />
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
