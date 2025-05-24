import React from 'react';
import { useNavigate } from 'react-router-dom';
import rooms from '../data/roomsMock';
import '../styles/RoomCardList.css';

const RoomCardList = () => {
  const navigate = useNavigate();

  const handleBook = (room) => {
    // Можно передать данные через localStorage, query или context
    navigate('/booking', { state: { room } });
  };

  return (
    <section className="room-card-list">
      {rooms.map((room) => (
        <div className="room-card" key={room.id}>
          <img src={room.photos[0]} alt={room.name} className="room-img" />
          <div className="room-info">
            <h3>{room.name}</h3>
            <ul>
              <li>Вместимость: {room.capacity} человек</li>
              <li>Цена: {room.price.toLocaleString()} ₽/сутки</li>
            </ul>
            <button className="btn-book" onClick={() => handleBook(room)}>
              Забронировать
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RoomCardList;
