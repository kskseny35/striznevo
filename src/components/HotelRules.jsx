import React from 'react';
import '../styles/HotelRules.css';

const HotelRules = () => {
  return (
    <section className="hotel-rules-wrapper">
      <div className="rule-card left">
        <h3>Услуги и оснащение</h3>
        <ul>
          <li><strong>Общие:</strong> Отопление, баня, прачечная</li>
          <li><strong>Активный отдых:</strong> Детская площадка, катание на лыжах, спортивные зоны</li>
          <li><strong>Услуги:</strong> Аренда инвентаря, трансфер, организация экскурсий</li>
          <li><strong>Парковка:</strong> Бесплатная частная парковка на месте</li>
        </ul>
      </div>

      <div className="rule-card right">
        <h3>Правила</h3>
        <p><strong>Заезд:</strong> с 14:00</p>
        <p><strong>Выезд:</strong> до 12:00</p>
        <p><strong>Отмена / Предоплата:</strong> Зависит от типа выбранного тарифа</p>
        <p><strong>Дети и доп. места:</strong> Разрешается размещение детей</p>
        <p><strong>Животные:</strong> Размещение возможно по предварительному согласованию</p>
        <p><strong>Принимаемые карты:</strong> Mastercard, Visa</p>
      </div>
    </section>
  );
};

export default HotelRules;
