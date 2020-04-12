import React from 'react';
import { Link } from 'react-router-dom';
import './MyAccountButton.scss';

const MyAccountButton = ({ path }) => {
  return (
    <Link to={path} className="my-account-button">
      Moje konto
    </Link>
  );
};

export default MyAccountButton;
