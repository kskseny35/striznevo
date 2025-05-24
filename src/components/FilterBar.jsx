import React, { useState } from 'react';
import '../styles/FilterBar.css';

const FilterBar = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [promo, setPromo] = useState('');

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Заезд</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Выезд</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Гостей</label>
        <select value={guests} onChange={e => setGuests(e.target.value)}>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="filter-group promo">
        <label>Промокод</label>
        <input
          type="text"
          value={promo}
          onChange={e => setPromo(e.target.value)}
          placeholder="Введите код"
        />
      </div>
    </div>
  );
};

export default FilterBar;
