import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Striznevo Guest House</p>
          <p>Вологодская область, пос. Стризнево</p>
          <p>Телефон: <a href="tel:+79115136840">+7 (911) 513-68-40</a></p>
          <p>Email: <a href="mailto:akvilon_35@mail.ru">akvilon_35@mail.ru</a></p>
        </div>

        <div className="footer-section">
          <h3>Как добраться</h3>
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A87fb90baca418f563efd4e29b41dfb70719619194a2f8635d69b152f79070c79&amp;source=constructor"
            width="100%"
            height="200"
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
