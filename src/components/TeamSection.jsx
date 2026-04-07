import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';
import team1Img from '../assets/team1.png';
import team2Img from '../assets/team2.png';

const TeamSection = () => {
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

  const team = [
    {
      name: "Alex Mercer",
      role: "Chief Executive Officer",
      bio: "Former lead architect at major tech giants, Alex brings over a decade of visionary leadership to Nexis.",
      image: team1Img
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "An expert in distributed systems and machine learning, Sarah ensures our architecture stays bleeding-edge.",
      image: team2Img
    }
  ];

  return (
    <section id="team" className="team-section">
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2>Meet the Visionaries</h2>
        <p>The minds behind the magic.</p>
      </motion.div>
      
      <motion.div 
        className="team-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {team.map((member, idx) => (
          <motion.div key={idx} className="team-member glass-panel hover-lift" variants={itemVariants}>
            <div className="member-image">
              <img src={member.image} alt={`${member.name}, ${member.role}`} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
