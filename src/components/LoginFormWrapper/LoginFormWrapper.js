import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import './LoginFormWrapper.scss';

const LoginFormWrapper = props => {
  return (
    <div className="login-form-wrapper">
      <h2>Zaloguj się</h2>
      <LoginForm {...props} />
    </div>
  );
};

export { LoginFormWrapper };
