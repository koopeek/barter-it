import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { loginUser, clearErrorMessage } from '../../../redux/auth/authActions';
import { Input } from '../../Input/Input';
import ROUTES from '../../../routes/routes';
import './LoginForm.scss';

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch]);

  const validate = ({ password }) => {
    const errors = {};

    if (!password || password.length < 3) {
      errors.password = 'Wprowadz haslo';
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
            <Field name="email" component={Input} type="email" label="E-mail" />
          </div>
          <div className="login-form__field">
            <Field name="password" component={Input} type="password" label="Hasło" />
          </div>
          {!loading && errorMessage && (
            <div className="login-form__info login-form__info--error">
              <span>{errorMessage}</span>
            </div>
          )}
          <div className="login-form__buttons">
            <button type="submit" className={loading ? 'button-disabled' : ''}>
              Zaloguj
            </button>
          </div>
          <div className="register-form__info">
            <span>Nie masz konta?</span>
            <Link to={ROUTES.ACCOUNT_REGISTER}> Zarejestruj się</Link>
          </div>
        </form>
      )}
    </Form>
  );
};

const LoginFormWithRouter = withRouter(LoginForm);

export { LoginFormWithRouter };
