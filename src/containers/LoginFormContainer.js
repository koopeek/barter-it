import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearErrorMessage } from '../redux/auth/authActions';
import { LoginFormWrapper } from '../components/LoginFormWrapper/LoginFormWrapper';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch]);

  const validateFormValues = ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Wprowadź adres e-mail';
    }
    if (!password || password.length < 3) {
      errors.password = 'Wprowadź hasło';
    }
    return errors;
  };

  const handleSubmitForm = values => {
    dispatch(loginUser(values, history));
  };

  return (
    <LoginFormWrapper
      validateFormValues={validateFormValues}
      handleSubmitForm={handleSubmitForm}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
};

export { LoginFormContainer };
