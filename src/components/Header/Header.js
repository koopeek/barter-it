import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewItemButton from '../Buttons/NewItemButton/NewItemButton';
import UserNavIcon from './UserNavIcon/UserNavIcon';
import UserNavList from './UserNavList/UserNavList';
import './Header.scss';

const Header = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);

  const toggleHamburger = () => {
    const hamburgerButton = document.querySelector('.navigation__hamburger');
    const navigationList = document.querySelector('.navigation__list');
    hamburgerButton.classList.toggle('navigation__hamburger--active');
    navigationList.classList.toggle('navigation__list--active');

    setMobileNavOpened(!mobileNavOpened);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo">
          <h2>
            <Link to="/">Barter it</Link>
          </h2>
        </div>
        {window.location.pathname !== '/account/login' &&
        window.location.pathname !== '/account/create' ? (
          <ul className="navigation__list">
            <li className="navigation__list__item">
              <NewItemButton />
            </li>
            <li className="navigation__list__item navigation__list__item--userNavIcon">
              <UserNavIcon />
            </li>
            {mobileNavOpened && <UserNavList />}
          </ul>
        ) : null}
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
