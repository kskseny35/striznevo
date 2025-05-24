import React from 'react';
import '../styles/HotelRules.css';

const HotelRules = () => {
  return (
    <section className="hotel-rules">
      <h2>Правила проживания</h2>
      <ul>
        <li>Заезд с 14:00, выезд до 12:00</li>
        <li>Курение в номерах строго запрещено</li>
        <li>Домашние животные разрешены по согласованию</li>
        <li>Пожалуйста, соблюдайте тишину после 23:00</li>
        <li>Бережно относитесь к имуществу и окружающей природе</li>
        <li>Уважайте других гостей — мы за комфорт всех!</li>
      </ul>
    </section>
  );
};

export default HotelRules;
