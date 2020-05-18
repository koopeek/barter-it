import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const HeaderContainer = () => {

  const history = useHistory();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return <Header isAuthenticated={isAuthenticated} currentPathname={history.location.pathname} />;
};

export { HeaderContainer };
