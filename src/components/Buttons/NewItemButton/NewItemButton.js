import React from 'react';
import { Link } from 'react-router-dom';
import './NewItemButton.scss';

const NewItemButton = () => {
  return (
    <Link to="/item/new" className="new-item-button">
      Dodaj nowy przedmiot
    </Link>
  );
};

export default NewItemButton;
