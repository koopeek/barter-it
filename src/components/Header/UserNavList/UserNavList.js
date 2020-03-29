import React from 'react';
import { useSelector } from 'react-redux';
import SignInButton from '../../Buttons/SignInButton/SignInButton';
import SignUpButton from '../../Buttons/SignUpButton/SignUpButton';
import './UserNavList.scss';

const UserNavList = () => {
  const isUserLogged = useSelector(state => state.user.isLogged);
  return (
    <>
      <li>Moje przedmioty</li>
      {isUserLogged && <li>Ustawienia</li>}
      {isUserLogged && <li className="last-list-element">Wyloguj się</li>}
      {!isUserLogged && (
        <li className="last-list-element list-buttons-area">
          <SignInButton />
          <SignUpButton />
        </li>
      )}
    </>
  );
};

export default UserNavList;
