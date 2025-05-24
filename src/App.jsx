import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import BookingFormPage from './pages/BookingFormPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import InfoPage from './pages/InfoPage';
import PlacesPage from './pages/PlacesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/booking" element={<BookingFormPage />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/places" element={<PlacesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
