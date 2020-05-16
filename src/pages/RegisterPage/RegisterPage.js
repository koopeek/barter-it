import React from 'react';
import { RegisterFormContainer } from '../../containers/RegisterFormContainer';
import './RegisterPage.scss';

const RegisterPage = () => {
  return (
    <main>
      <article className="register-page">
        <RegisterFormContainer />
      </article>
    </main>
  );
};

export { RegisterPage };
