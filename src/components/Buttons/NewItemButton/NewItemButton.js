import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../assets/routes';
import './NewItemButton.scss';

const NewItemButton = () => {
  return (
    <Link to={ROUTES.NEW_ITEM} className="new-item-button">
      Dodaj nowy przedmiot
    </Link>
  );
};

export default NewItemButton;
