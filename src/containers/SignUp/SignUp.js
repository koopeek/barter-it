import React from 'react';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="signUp">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
