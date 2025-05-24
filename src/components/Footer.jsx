import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Striznevo Guest House</p>
          <p>Вологодская область, с. Стризнево</p>
          <p>Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
          <p>Email: <a href="mailto:info@striznevo.ru">info@striznevo.ru</a></p>
        </div>

        <div className="footer-section">
          <h3>Как добраться</h3>
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4595428220d8a010a33dfadaa47a978dd1d7f5482a640daaeb291090d7738a8e&amp;source=constructor"
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Striznevo Guest House. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
