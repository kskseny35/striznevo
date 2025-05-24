import React from 'react';
import '../styles/ServiceInfoBlock.css';
import { FaWifi, FaCar, FaUtensils, FaTree, FaTv, FaSnowflake } from 'react-icons/fa';

const services = [
  { icon: <FaWifi />, label: 'Wi-Fi' },
  { icon: <FaCar />, label: 'Парковка' },
  { icon: <FaUtensils />, label: 'Кухня' },
  { icon: <FaTree />, label: 'Терраса' },
  { icon: <FaTv />, label: 'Телевизор' },
  { icon: <FaSnowflake />, label: 'Кондиционер' },
];

const ServiceInfoBlock = () => {
  return (
    <section className="service-info">
      <h2>Услуги и удобства</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-item" key={i}>
            <div className="icon">{s.icon}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceInfoBlock;
