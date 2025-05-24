import React, { useRef } from 'react';
import '../styles/PlaceSection.css';

const PlaceSection = ({ title, images, description, bgColor = '#fff' }) => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="place-section" style={{ backgroundColor: bgColor }}>
      <h3 className="place-title">{title}</h3>

      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>

        <div className="carousel" ref={carouselRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`place-${i}`} />
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      <p className="place-description">{description}</p>
    </section>
  );
};

export default PlaceSection;
