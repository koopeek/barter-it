import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Register.scss';

const Register = () => {
  return (
    <main>
      <article className="register-view">
        <RegisterForm />
      </article>
    </main>
  );
};

export default Register;
