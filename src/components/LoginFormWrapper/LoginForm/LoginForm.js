import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { loginUser, clearErrorMessage } from '../../../redux/auth/authActions';
import { Input } from '../../Input/Input';
import ROUTES from '../../../routes/routes';
import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch]);

  const validate = ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Wprowadź adres e-mail';
    }

    if (!password || password.length < 3) {
      errors.password = 'Wprowadź hasło';
    }

    return errors;
  };

  const handleSubmit = values => {
    dispatch(loginUser(values, history));
  };

  return (
    <Form onSubmit={handleSubmit} validate={validate}>
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
            <Link to={ROUTES.ACCOUNT_REGISTER}> Zarejestruj się</Link>
          </div>
        </form>
      )}
    </Form>
  );
};

export { LoginForm };
