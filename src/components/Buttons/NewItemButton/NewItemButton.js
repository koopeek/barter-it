import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../../routes/routes';
import './NewItemButton.scss';

const NewItemButton = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(ROUTES.NEW_ITEM);
  };

  return (
    <button type="button" className="new-item-button" onClick={() => handleButtonClick()}>
      Dodaj przedmiot
    </button>
  );
};

export default NewItemButton;
