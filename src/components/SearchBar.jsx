import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Поиск:', { checkIn, checkOut, guests });
    // Здесь можно сделать навигацию или фильтрацию
  };

  return (
    <section className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>
          Дата заезда
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
        </label>
        <label>
          Дата выезда
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
        </label>
        <label>
          Гостей
          <select value={guests} onChange={e => setGuests(e.target.value)}>
            {[1,2,3,4,5,6].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <button type="submit">Проверить</button>
      </form>
    </section>
  );
};

export default SearchBar;
