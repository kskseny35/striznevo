import React, { useState } from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ checkIn, checkOut, guests }) => {
  const [startDate, setStartDate] = useState(checkIn);
  const [endDate, setEndDate] = useState(checkOut);
  const [guestCount, setGuestCount] = useState(guests);
  const [promo, setPromo] = useState('');

  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        <div className="filter-block">
          <span className="filter-label">Заезд</span>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </div>
        <div className="filter-block">
          <span className="filter-label">Выезд</span>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className="filter-block">
          <span className="filter-label">Гостей</span>
          <select value={guestCount} onChange={e => setGuestCount(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="filter-block promo">
          <span className="filter-label">Промокод</span>
          <input
            type="text"
            placeholder="Введите код"
            value={promo}
            onChange={e => setPromo(e.target.value)}
          />
        </div>
        <button className="filter-btn">Изменить даты и гостей</button>
      </div>
    </div>
  );
};

export default FilterBar;
