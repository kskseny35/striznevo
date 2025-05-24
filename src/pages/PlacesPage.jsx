import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlaceSection from '../components/PlaceSection';

const PlacesPage = () => {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Как провести время — рекомендуем</h2>

      <PlaceSection
        title="База отдыха Y.E.S."
        images={[
          '/assets/places/yes1.jpg',
          '/assets/places/yes2.jpg',
          '/assets/places/yes3.jpg',
          '/assets/places/yes4.jpg'
        ]}
        description="Y.E.S. — центр с аквапарком, зоопарком, канатной дорогой и рестораном-музеем. Всего в 30 минутах от нас."
      />

      <PlaceSection
        title="Источник Николая Чудотворца"
        images={[
          '/assets/places/source1.jpg',
          '/assets/places/source2.jpg',
          '/assets/places/source3.jpg'
        ]}
        description="Святой источник рядом с деревней Лапалово. Живописное место для очищения и уединения. Восстановлен в 2008 году."
        bgColor="#f9f9f9"
      />

      <PlaceSection
        title="Музей ретро автомобилей"
        images={[
          '/assets/places/retro1.jpg',
          '/assets/places/retro2.jpg',
          '/assets/places/retro3.jpg'
        ]}
        description="Уникальная коллекция советских автомобилей. Узнай, с чего всё начиналось! Отличное место для всей семьи."
      />

      <Footer />
    </>
  );
};

export default PlacesPage;
