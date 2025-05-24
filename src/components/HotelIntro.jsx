import React from 'react';
import '../styles/HotelIntro.css';

const HotelIntro = () => {
  return (
    <section className="hotel-intro">
      <div className="hotel-intro-content">
        <div className="hotel-image">
          <img src="../assets/hotel.png" alt="Striznevo Guest House" />
        </div>
        <div className="hotel-text">
          <h2>ГОСТЕВОЙ ДОМ «Striznevo Guest House»</h2>
          <p>
            Дорогие гости,<br />
            Мы рады пригласить вас в гости!<br />
            Наш дом предлагает вам 5 комфортабельных номеров, каждый из которых создан с заботой о вашем комфорте.
            Мы рады сообщить, что можем разместить до 20 человек одновременно, что делает наше пространство идеальным
            для дружеских встреч, семейных праздников или корпоративных мероприятий.
          </p>
          <p>
            Все номера оснащены всем необходимым для вашего уюта: удобные кровати, телевизоры, отдельные санузлы и
            мини-кухни. Отдельные номера имеют удобные рабочие столы или отдельные выходы на террасу.
            Мы также ценим ваше время и предлагаем удобную систему онлайн-бронирования.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HotelIntro;
