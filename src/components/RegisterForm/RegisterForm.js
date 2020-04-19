import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import Input from '../Input/Input';
import './RegisterForm.scss';

const RegisterForm = () => {
  const handleSubmit = () => {};
  const validate = () => {};

  return (
    <article className="form-wrapper">
      <h2>Zarejestruj się</h2>
      <Form onSubmit={handleSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off" className="form">
            <div className="form__field">
              <Field name="email" component={Input} type="email" label="E-mail" />
            </div>
            <div className="form__field">
              <Field name="password" component={Input} type="password" label="Hasło" />
            </div>
            <div className="form__field">
              <Field
                name="repeatedPassword"
                component={Input}
                type="password"
                label="Powtórz hasło"
              />
            </div>
            <div className="form__buttons">
              <button type="submit">Zarejestruj się</button>
            </div>
            <div className="form__info">
              <span>Posiadasz już konto?</span>
              <Link to={ROUTES.ACCOUNT_LOGIN}> Zaloguj się</Link>
            </div>
          </form>
        )}
      </Form>
    </article>
  );
};

export default RegisterForm;
