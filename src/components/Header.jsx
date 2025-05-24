import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">Striznevo<br /><span>Guest House</span></Link>
        </div>

        <nav className="main-nav">
          <NavLink to="/" end className="nav-link">Главная</NavLink>
          <NavLink to="/rooms" className="nav-link">Номера и цены</NavLink>
          <NavLink to="/info" className="nav-link">Информация</NavLink>
          <NavLink to="/places" className="nav-link">Куда сходить</NavLink>
        </nav>

        <div className="header-contacts">
          <a href="mailto:info@striznevo.ru">info@striznevo.ru</a>
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
