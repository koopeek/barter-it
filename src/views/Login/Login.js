import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <div className="login-view">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
