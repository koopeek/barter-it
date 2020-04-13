import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import ROUTES from '../../assets/routes';
import { authUser } from '../../redux/user/userActions';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import './SignInForm.scss';

const SingInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(authUser(values));
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
              <Link to={ROUTES.ACCOUNT_SIGN_UP}> Zarejestruj się</Link>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default SingInForm;
