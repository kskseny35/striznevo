import React, { useState } from 'react';
import '../styles/BookingFormPage.css';
import BookingSteps from '../components/BookingSteps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation,  useNavigate } from 'react-router-dom';

const BookingFormPage = () => {
  const [form, setForm] = useState({
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    phone: '',
    checkInTime: '',
    checkOutTime: '',
    guests: 2,
    nights: 2,
    rooms: 1,
    comment: '',
    payLater: false,
  });

  const location = useLocation();
  const selectedRoom = location.state?.room;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: {
        fullName: `${form.surname} ${form.name} ${form.patronymic}`,
        email: form.email,
        phone: form.phone,
        checkIn: form.checkInTime,
        checkOut: form.checkOutTime,
        nights: form.nights,
        room: selectedRoom,
      },
    });
  };

  if (!selectedRoom) {
    return <p style={{ textAlign: 'center' }}>Пожалуйста, выберите номер на странице "Номера и цены".</p>;
  }
  
  return (
    <>
    <Header />
    <BookingSteps currentStep={2} />
    <div className="booking-form-page">
     
    <div className="booking-title">
      <h3>Valentina Guest House</h3>
      <div className="room-name">{selectedRoom?.name || 'Выбранный номер'}</div>
      <div className="price">{selectedRoom?.price?.toLocaleString()} руб</div>
    </div>

     <form onSubmit={handleSubmit} className="booking-form">

       <div className="row">
         <select name="rooms" value={form.rooms} onChange={handleChange}>
           {[1,2,3,4].map(n => <option key={n} value={n}>{n} номер{n > 1 ? 'а' : ''}</option>)}
         </select>

         <select name="guests" value={form.guests} onChange={handleChange}>
           {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} взрослый{n > 1 ? 'е' : ''}</option>)}
         </select>

         <select name="nights" value={form.nights} onChange={handleChange}>
           {[1,2,3,4].map(n => <option key={n} value={n}>{n} ноч{n === 1 ? 'ь' : (n < 5 ? 'и' : 'ей')}</option>)}
         </select>
       </div>

       <div className="row">
         <input name="surname" placeholder="Фамилия" value={form.surname} onChange={handleChange} />
         <input name="name" placeholder="Имя" value={form.name} onChange={handleChange} />
         <input name="patronymic" placeholder="Отчество" value={form.patronymic} onChange={handleChange} />
       </div>

       <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
       <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} />

       <div className="row">
         <input name="checkInTime" type="text" placeholder="Время заезда" value={form.checkInTime} onChange={handleChange} />
         <input name="checkOutTime" type="text" placeholder="Время выезда" value={form.checkOutTime} onChange={handleChange} />
       </div>

       <textarea
         name="comment"
         placeholder="Особые пожелания"
         value={form.comment}
         onChange={handleChange}
       />

       <label className="checkbox">
         <input type="checkbox" name="payLater" checked={form.payLater} onChange={handleChange} />
         Оплатить позже
       </label>

       <button type="submit">Отправить</button>
     </form>
   </div>
    <><Footer /></>
    </>
  );
};

export default BookingFormPage;
