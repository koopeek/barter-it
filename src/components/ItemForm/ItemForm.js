import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { addNewItem } from '../../actions/user';
import './ItemForm.scss';

const ItemForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = values => {
    dispatch(addNewItem(values));
  };

  const validate = values => {
    const errors = {};

    if (!values.name || values.name.length < 3) {
      errors.name = 'Nazwa przedmiotu musi zawierać conajmniej 3 znaki!';
    }
    if (!values.mark) {
      errors.mark = 'Musisz podać markę przedmiotu!';
    }
    if (!values.category || values.category === 'Wybierz') {
      errors.category = 'Musisz wybrać kategorie!';
    }
    if (!values.condition || values.condition === 'Wybierz') {
      errors.condition = 'Musisz wybrać stan przedmiotu!';
    }
    if (!values.description || values.description.length < 10) {
      errors.description = 'Opis przedmiotu musi zawierać conajmniej 10 znaków!';
    }
    return errors;
  };

  return (
    <Form onSubmit={handleSubmitForm} validate={validate}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="form">
          <Field name="name">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Nazwa</label>
                <input {...input} type="text" className="form__field-input" />
                {meta.error && meta.touched && (
                  <span className="form__field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="mark">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Marka</label>
                <input {...input} type="text" className="form__field-input" />
                {meta.error && meta.touched && (
                  <span className="form__field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="category">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Kategoria</label>
                <select {...input} selected="Odziez" className="form__field-input">
                  <option>Wybierz</option>
                  <option>Motoryzacja</option>
                  <option>Odziez</option>
                </select>
                {meta.error && meta.touched && (
                  <span className="form__field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="condition">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Stan</label>
                <select {...input} className="form__field-input">
                  <option>Wybierz</option>
                  <option>Bardzo dobry</option>
                  <option>Dobry</option>
                  <option>Uszkodzony</option>
                </select>
                {meta.error && meta.touched && (
                  <span className="form__field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="description">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Opis</label>
                <textarea {...input} type="text" className="form__field-textarea"></textarea>
                {meta.error && meta.touched && (
                  <span className="form__field-error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <div className="form__field">
            <label className="form__field-label">Zdjęcia</label>
            <div className="form__field-photos">---</div>
          </div>
          <div className="form__buttons">
            <button type="submit">Dodaj</button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default ItemForm;
