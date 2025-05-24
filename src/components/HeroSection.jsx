import React from 'react';
import SearchBar from './SearchBar';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
