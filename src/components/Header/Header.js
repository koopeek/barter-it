import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const toggleHamburger = () => {
    const hamburgerButton = document.querySelector('.navigation__hamburger');
    const navigationList = document.querySelector('.navigation__list');
    hamburgerButton.classList.toggle('navigation__hamburger--active');
    navigationList.classList.toggle('navigation__list--active');
  };

  return (
    <header>
      <nav className="navigation">
        <div className="navigation__logo">
          <h4>Barter it</h4>
        </div>
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <Link to="/" className="logo">
              Barter it
            </Link>
          </li>
          <li className="navigation__list__item">
            <Link to="/item/new" className="logo">
              Dodaj nowy przedmiot
            </Link>
          </li>
        </ul>
        <button className="navigation__hamburger" onClick={() => toggleHamburger()}>
          <div className="navigation__hamburger__box">
            <span className="navigation__hamburger__line"></span>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
