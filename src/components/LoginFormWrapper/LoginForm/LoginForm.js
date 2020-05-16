import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Input } from '../../Input/Input';
import ROUTES from '../../../global/routes';
import './LoginForm.scss';

const LoginForm = ({ validateFormValues, handleSubmitForm, loading, errorMessage }) => {
  return (
    <Form onSubmit={handleSubmitForm} validate={validateFormValues}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
          <div className="login-form__field">
            <Field name="email" type="email" label="E-mail" component={Input} />
          </div>
          <div className="login-form__field">
            <Field name="password" type="password" label="Hasło" component={Input} />
          </div>
          {!loading && errorMessage && (
            <div className="login-form__info login-form__info--error">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="login-form__buttons">
            <button type="submit" disabled={loading} className={loading ? 'button-disabled' : null}>
              Zaloguj
            </button>
          </div>
          <div className="login-form__info">
            <p>Nie masz konta?</p>
            <Link to={ROUTES.ACCOUNT_REGISTER}>Zarejestruj się</Link>
          </div>
        </form>
      )}
    </Form>
  );
};

LoginForm.propTypes = {
  validateFormValues: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export { LoginForm };
