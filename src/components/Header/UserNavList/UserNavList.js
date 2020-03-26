import React from 'react';
import { useSelector } from 'react-redux';

const UserNavList = () => {
  const isUserLogged = useSelector(state => state.user.isLogged);
  return (
    <>
      <li>Moje przedmioty</li>
      {isUserLogged && <li>Ustawienia</li>}
      {isUserLogged && <li>Wyloguj się</li>}
      {!isUserLogged && (
        <li>
          <div>
            <p>Zaloguj sie</p>
            <p>Zaloz konto</p>
          </div>
        </li>
      )}
    </>
  );
};

export default UserNavList;
