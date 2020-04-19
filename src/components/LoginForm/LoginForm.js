import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearErrorMessage } from '../../redux/auth/authActions';
import Input from '../Input/Input';
import ROUTES from '../../routes/routes';
import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, isLogged, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    }

    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch, history, isLogged]);

  const handleSubmitLoginForm = values => {
    if (!loading) {
      dispatch(loginUser(values));
    }
  };

  const validate = ({ password }) => {
    const errors = {};

    if (!password) {
      errors.password = 'Wprwadz hasło!';
    }

    return errors;
  };

  return (
    <div className="form-wrapper">
      <h2>Zaloguj się</h2>
      <Form onSubmit={handleSubmitLoginForm} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off" className="form">
            <div className="form__field">
              <Field name="email" component={Input} type="email" label="E-mail" />
            </div>
            <div className="form__field">
              <Field name="password" component={Input} type="password" label="Hasło" />
            </div>
            {!loading && errorMessage && (
              <div className="form__info form__info--error">
                <span>{errorMessage}</span>
              </div>
            )}
            <div className="form__buttons">
              <button type="submit" className={loading ? 'button-disabled' : ''}>
                Zaloguj
              </button>
            </div>
            <div className="form__info">
              <span>Nie posiadasz konta?</span>
              <Link to={ROUTES.ACCOUNT_REGISTER}>Zarejestruj się</Link>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
