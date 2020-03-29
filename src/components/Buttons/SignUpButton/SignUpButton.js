import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpButton.scss';

const SignUpButton = () => {
  return (
    <Link to="/account/create" className="signUpButton">
      Stwórz konto
    </Link>
  );
};

export default SignUpButton;
