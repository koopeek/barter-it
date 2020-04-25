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
    <div className="new-item-button">
      <button type="button" onClick={() => handleButtonClick()}>
        Dodaj przedmiot
      </button>
    </div>
  );
};

export default NewItemButton;
