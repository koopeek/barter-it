import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from '../../Input/Input';
import './SearchBoxForm.scss';

const SearchBoxForm = () => {
  const handleSubmit = values => {};

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="search-box-form">
          <div className="search-box-form__field search-box-form__field--input">
            <Field name="search" placeholder="Wyszukaj przedmiot" component={Input} type="text" />
          </div>
          <div className="search-box-form__field search-box-form__field--select">
            <Field name="category" component={Input} options={['a', 'b']} type="select" />
          </div>
          <div className="search-box-form__buttons">
            <button type="submit">Szukaj</button>
          </div>
        </form>
      )}
    </Form>
  );
};

export { SearchBoxForm };
