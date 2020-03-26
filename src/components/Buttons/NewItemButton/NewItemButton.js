import React from 'react';
import { Link } from 'react-router-dom';
import './NewItemButton.scss';

const NewItemButton = () => {
  const newItemViewPath = '/item/new';
  return (
    <>
      {window.location.pathname !== newItemViewPath ? (
        <Link to={newItemViewPath} className="new-item-button">
          Dodaj nowy przedmiot
        </Link>
      ) : null}
    </>
  );
};

export default NewItemButton;
