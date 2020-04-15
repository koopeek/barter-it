import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import ROUTES from '../../routes/routes';
import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(loginUser(values));
  };
  const validate = () => {};

  return (
    <div className="form-wrapper">
      <h2>Zaloguj się</h2>
      <Form onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off" className="form">
            <div className="form__field">
              <Field name="email" component={Input} type="email" label="E-mail" />
            </div>
            <div className="form__field">
              <Field name="password" component={Input} type="password" label="Hasło" />
            </div>
            <div className="form__buttons">
              <button type="submit">Zaloguj</button>
            </div>
            <div className="form__info">
              <span>Nie posiadasz konta?</span>
              <Link to={ROUTES.ACCOUNT_REGISTER}> Zarejestruj się</Link>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
