import React from 'react';
import { useHistory } from 'react-router-dom';
import './MyAccountButton.scss';

const MyAccountButton = ({ path }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(path);
  };

  return (
    <div className="my-account-button">
      <button type="button" onClick={() => handleButtonClick()}>
        Moje konto
      </button>
    </div>
  );
};

export default MyAccountButton;
