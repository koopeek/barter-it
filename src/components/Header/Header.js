import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ROUTES from '../../assets/routes';
import NewItemButton from '../Buttons/NewItemButton/NewItemButton';
import MyAccountButton from '../Buttons/MyAccountButton/MyAccountButton';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = ({ location }) => {
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
  });

  const isUserLogged = useSelector(state => state.user.isLogged);

  const toggleHamburger = () => {
    if (hamburger && navList) {
      hamburger.classList.toggle('navigation__hamburger--active');
      navList.classList.toggle('navigation__list--active');
    }
  };

  const renderNavList = () => {
    return (
      <>
        {location.pathname !== ROUTES.ACCOUNT_SIGN_IN &&
        location.pathname !== ROUTES.ACCOUNT_SIGN_UP ? (
          <>
            <ul className="navigation__list">
              {renderNewItemButton()}
              <li className="navigation__list__item">
                <MyAccountButton
                  path={isUserLogged ? ROUTES.ACCOUNT_SETTINGS : ROUTES.ACCOUNT_SIGN_IN}
                />
              </li>
            </ul>
            <button className="navigation__hamburger" onClick={() => toggleHamburger()}>
              <div className="navigation__hamburger__box">
                <span className="navigation__hamburger__line"></span>
              </div>
            </button>
          </>
        ) : null}
      </>
    );
  };

  const renderNewItemButton = () => {
    return (
      <>
        {location.pathname !== ROUTES.NEW_ITEM ? (
          <li className="navigation__list__item">
            <NewItemButton />
          </li>
        ) : null}
      </>
    );
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo">
          <h2>
            <Link to="/">Barter it</Link>
          </h2>
        </div>
        {renderNavList()}
      </nav>
    </header>
  );
};

export default withRouter(Header);
