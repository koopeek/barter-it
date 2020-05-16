import React from 'react';
import './RegisterFormWrapper.scss';
import RegisterForm from './RegisterForm/RegisterForm';

const RegisterFormWrapper = props => {
  return (
    <div className="register-form-wrapper">
      <h2>Zarejestruj się</h2>
      <RegisterForm {...props} />
    </div>
  );
};

export { RegisterFormWrapper };
