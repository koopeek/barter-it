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

  return (
    <Form onSubmit={handleSubmitForm}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="form">
          <Field name="name">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Nazwa</label>
                <input {...input} type="text" className="form__field-input" />
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="mark">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Marka</label>
                <input {...input} type="text" className="form__field-input" />
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="category">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Kategoria</label>
                <select {...input} className="form__field-input">
                  <option>Motoryzacja</option>
                  <option>Odziez</option>
                </select>
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="condition">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Stan</label>
                <select {...input} className="form__field-input">
                  <option>Bardzo dobry</option>
                  <option>Dobry</option>
                  <option>Uszkodzony</option>
                </select>
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="description">
            {({ input, meta }) => (
              <div className="form__field">
                <label className="form__field-label">Opis</label>
                <textarea {...input} type="text" className="form__field-textarea"></textarea>
                {meta.error && <span>{meta.error}</span>}
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
