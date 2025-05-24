import React, { useState } from 'react';
import '../styles/TabbedPhotoGallery.css';

const galleryData = {
  Интерьер: [
    '/assets/gallery/interior1.jpg',
    '/assets/gallery/interior2.jpg',
    '/assets/gallery/interior3.jpg',
  ],
  'Детская площадка': [
    '/assets/gallery/playground1.jpg',
    '/assets/gallery/playground2.jpg',
  ],
  Барбекю: [
    '/assets/gallery/bbq1.jpg',
    '/assets/gallery/bbq2.jpg',
    '/assets/gallery/bbq3.jpg',
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
