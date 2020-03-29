import React from 'react';
import Header from '../../components/Header/Header';
import SingInForm from '../../components/SignInForm/SignInForm';
import './SignIn.scss';

const SignIn = () => {
  return (
    <div>
      <Header />
      <div className="signIn">
        <SingInForm />
      </div>
    </div>
  );
};

export default SignIn;
