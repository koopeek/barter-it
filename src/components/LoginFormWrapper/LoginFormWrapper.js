import React from 'react';
import { LoginFormWithRouter } from './LoginForm/LoginForm';
import './LoginFormWrapper.scss';

const LoginFormWrapper = () => {
  return (
    <div className="login-form-wrapper">
      <h2>Zaloguj się</h2>
      <LoginFormWithRouter />
    </div>
  );
};

export { LoginFormWrapper };
