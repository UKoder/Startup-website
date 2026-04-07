import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lock, Zap } from 'lucide-react';
import './SolutionsSection.css';

const SolutionsSection = () => {
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

  const solutions = [
    {
      icon: <Rocket size={28} color="white" />,
      title: "Scaling Inefficiencies",
      description: "Legacy systems struggle with volume. Our dynamic infrastructure scales automatically, ensuring zero latency during peak operations."
    },
    {
      icon: <Lock size={28} color="white" />,
      title: "Data Fragmentation",
      description: "We unify disparate data silos into a single, cohesive dashboard, granting you unparalleled insights in real-time."
    },
    {
      icon: <Zap size={28} color="white" />,
      title: "Manual Workflows",
      description: "Our intelligent automation engine handles repetitive tasks, freeing your team to focus on strategic, high-value initiatives."
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2>Problems We Solve</h2>
        <p>Transforming industry bottlenecks into streamlined, efficient workflows.</p>
      </motion.div>
      
      <motion.div 
        className="solutions-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {solutions.map((sol, idx) => (
          <motion.div key={idx} className="solution-card glass-panel hover-lift" variants={itemVariants}>
            <div className="icon-wrap gradient-bg">
              {sol.icon}
            </div>
            <h3>{sol.title}</h3>
            <p>{sol.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SolutionsSection;
