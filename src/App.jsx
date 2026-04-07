import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import TeamSection from './components/TeamSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <TeamSection />
      <ContactFooter />
    </>
  );
}

export default App;
