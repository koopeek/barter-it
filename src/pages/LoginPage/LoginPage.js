import React from 'react';
import './LoginPage.scss';
import { LoginFormContainer } from '../../containers/LoginFormContainer';

const LoginPage = () => {
  return (
    <main>
      <div className="login-page">
        <LoginFormContainer />
      </div>
    </main>
  );
};

export { LoginPage };
