import React from 'react';
import { LoginFormWrapper } from '../../components/LoginFormWrapper/LoginFormWrapper';
import './Login.scss';

const Login = () => {
  return (
    <main>
      <div className="login-view">
        <LoginFormWrapper />
      </div>
    </main>
  );
};

export default Login;
