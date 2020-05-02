import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from '../Input/Input';
import './Search.scss';

const Search = () => {
  const handleSubmitSearchForm = values => {
    //TODO
  };

  return (
    <div>
      <Form onSubmit={handleSubmitSearchForm}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off" className="search-form">
            <div className="search-form__field">
              <Field name="search" placeholder="Wyszukaj przedmiot" component={Input} type="text" />
            </div>
            <div className="search-form__buttons">
              <button type="submit">Szukaj</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Search;
