import FilterBar from '../components/FilterBar';
import RoomCardList from '../components/RoomCardList';
import BookingSteps from '../components/BookingSteps';
import HotelRules from '../components/HotelRules';
import ServiceInfoBlock from '../components/ServiceInfoBlock';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const RoomsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const checkIn = params.get('checkIn') || '';
  const checkOut = params.get('checkOut') || '';
  const guests = parseInt(params.get('guests')) || 2;

  return (
    <>
      <Header />
      <BookingSteps currentStep={1} />
      <FilterBar checkIn={checkIn} checkOut={checkOut} guests={guests} />
      <RoomCardList />
      <HotelRules />
      <ServiceInfoBlock />
      <Footer />
    </>
  );
};

export default RoomsPage;
