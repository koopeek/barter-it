import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/auth/authActions';
import { Header } from '../components/Header/Header';
import ROUTES from '../global/routes';

const HeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    dispatch(logout());
  };

  const isAuthPage = () => {
    const { pathname } = history.location;
    return pathname === ROUTES.ACCOUNT_LOGIN || pathname === ROUTES.ACCOUNT_REGISTER;
  };

  return (
    <Header
      isAuthenticated={isAuthenticated}
      currentPathname={history.location.pathname}
      handleLogout={handleLogout}
      isAuthPage={isAuthPage()}
    />
  );
};

export { HeaderContainer };
