import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const toggleHamburger = () => {
    const hamburgerButton = document.querySelector('.navigation__hamburger');
    const navigationList = document.querySelector('.navigation__list');
    hamburgerButton.classList.toggle('navigation__hamburger--active');
    navigationList.classList.toggle('navigation__list--active');
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo">
          <h2>
            <Link to="/">Barter it</Link>
          </h2>
        </div>
        <ul className="navigation__list">
          {window.location.pathname !== '/item/new' && (
            <li className="navigation__list__item navigation__list__item--add-new">
              <Link to="/item/new">Dodaj nowy przedmiot</Link>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="navigation__list__item__icon"
              />
            </li>
          )}
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
