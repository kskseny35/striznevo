import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelDescription from '../components/HotelDescription';
import TabbedPhotoGallery from '../components/TabbedPhotoGallery';
import VideoBlock from '../components/VideoBlock';

const InfoPage = () => {
  return (
    <>
        <Header />
        <HotelDescription />
        <TabbedPhotoGallery />
        <VideoBlock />
        <Footer />
    </>
  );
};

export default InfoPage;
