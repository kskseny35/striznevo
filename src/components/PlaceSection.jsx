import React, { useRef } from 'react';
import '../styles/PlaceSection.css';

const PlaceSection = ({ title, images, description, bgColor = '#fff' }) => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 320;
    const carousel = carouselRef.current;
  
    if (!carousel) return;
  
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
    if (direction === 'left') {
      if (carousel.scrollLeft === 0) {
        // Перепрыгиваем в конец
        carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (carousel.scrollLeft >= maxScroll - 1) {
        // Перепрыгиваем в начало
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
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
