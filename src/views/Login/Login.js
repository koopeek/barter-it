import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.scss';

const Login = () => {
  return (
    <main>
      <div className="login-view">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
