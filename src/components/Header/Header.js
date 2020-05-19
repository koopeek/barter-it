import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '../NavLink/NavLink';
import ROUTES from '../../global/routes';
import './Header.scss';

const Header = ({ isAuthenticated, currentPathname, handleLogout, isAuthPage }) => {
  const [hamburger, setHamburger] = useState(null);
  const [navList, setNavList] = useState(null);

  useEffect(() => {
    setHamburger(document.querySelector('.navigation__hamburger'));
    setNavList(document.querySelector('.navigation__list'));

    return () => {
      if (hamburger && hamburger.classList.contains('navigation__hamburger--active')) {
        hamburger.classList.remove('navigation__hamburger--active');
      }
      if (navList && navList.classList.contains('navigation__list--active')) {
        navList.classList.remove('navigation__list--active');
      }
    };
  }, [hamburger, navList]);

  const toggleHamburger = () => {
    if (hamburger && navList) {
      hamburger.classList.toggle('navigation__hamburger--active');
      navList.classList.toggle('navigation__list--active');
    }
  };

  const renderNavList = () => {
    return (
      <>
        <ul className="navigation__list">
          {currentPathname !== ROUTES.NEW_ITEM && (
            <li className="navigation__list__item">
              <NavLink
                contentText="Dodaj przedmiot"
                path={isAuthenticated ? ROUTES.NEW_ITEM : ROUTES.ACCOUNT_LOGIN}
              />
            </li>
          )}
          <li className="navigation__list__item">
            <NavLink
              contentText="Moje konto"
              path={isAuthenticated ? ROUTES.ACCOUNT_MY_ACCOUNT : ROUTES.ACCOUNT_LOGIN}
            />
          </li>
          {isAuthenticated && (
            <li className="navigation__list__item">
              <FontAwesomeIcon icon={faSignOutAlt} size="2x" onClick={() => handleLogout()} />
            </li>
          )}
        </ul>
        <button className="navigation__hamburger" onClick={() => toggleHamburger()}>
          <div className="navigation__hamburger__box">
            <span className="navigation__hamburger__line"></span>
          </div>
        </button>
      </>
    );
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo">
          <h1>
            <Link to="/">Barter it</Link>
          </h1>
        </div>
        {!isAuthPage && renderNavList()}
      </nav>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentPathname: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isAuthPage: PropTypes.bool.isRequired
};

export { Header };
