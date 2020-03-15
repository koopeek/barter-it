import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/przedmiot/nowy">Dodaj nowy produkt</Link>
    </header>
  );
};

export default Header;
