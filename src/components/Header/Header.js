import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/item/new">Dodaj nowy produkt</Link>
    </header>
  );
};

export default Header;
