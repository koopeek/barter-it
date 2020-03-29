import React from 'react';
import { Link } from 'react-router-dom';
import './SignInButton.scss';

const SignInButton = () => {
  return (
    <Link to="/account/login" className="signInButton">
      Zaloguj
    </Link>
  );
};

export default SignInButton;
