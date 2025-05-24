import FilterBar from '../components/FilterBar';
import RoomCardList from '../components/RoomCardList';
import BookingSteps from '../components/BookingSteps';
import ServiceInfoBlock from '../components/ServiceInfoBlock';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoomsPage = () => {
  return (
    <>
      <Header />
      <BookingSteps currentStep={1} />
      <h2 className="page-title">Выберите номер</h2>
      <FilterBar />
      <RoomCardList />
      <ServiceInfoBlock />
      <Footer />
    </>
  );
};

export default RoomsPage;
