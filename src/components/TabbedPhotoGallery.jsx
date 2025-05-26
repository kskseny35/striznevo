import React, { useState } from 'react';
import '../styles/TabbedPhotoGallery.css';

const galleryData = {
  Интерьер: [
    '../assets/gallery/gallery_1.png',
    '../assets/gallery/gallery_2.png',
    '../assets/gallery/gallery_3.png',
  ],
  'Детская площадка': [
    '../assets/gallery/gallery_10.png',
    '../assets/gallery/gallery_11.png',
    '../assets/gallery/gallery_12.png',
  ],
  Барбекю: [
    '../assets/gallery/gallery_6.png',
    '../assets/gallery/gallery_7.png',
    '../assets/gallery/gallery_8.png',
  ],
};

const TabbedPhotoGallery = () => {
  const [activeTab, setActiveTab] = useState('Интерьер');

  return (
    <section className="tabbed-gallery">
      <h2>Фотогалерея</h2>
      <div className="tabs">
        {Object.keys(galleryData).map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {galleryData[activeTab].map((src, i) => (
          <img src={src} alt={`gallery-${i}`} key={i} />
        ))}
      </div>
    </section>
  );
};

export default TabbedPhotoGallery;
