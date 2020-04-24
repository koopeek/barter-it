import React from 'react';
import { useHistory } from 'react-router-dom';
import './MyAccountButton.scss';

const MyAccountButton = ({ path }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(path);
  };

  return (
    <button type="button" className="my-account-button" onClick={() => handleButtonClick()}>
      Moje konto
    </button>
  );
};

export default MyAccountButton;
