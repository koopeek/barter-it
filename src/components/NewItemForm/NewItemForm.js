import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Dropzone } from '../Dropzone/Dropzone';
import { CATEGORIES } from '../../global/categories';
import ITEM_CONDITIONS from '../../global/itemConditions';
import { Input } from '../Input/Input';
import './NewItemForm.scss';

const NewItemForm = ({ validateFormValues, handleSubmitForm }) => {
  return (
    <Form onSubmit={handleSubmitForm} validate={validateFormValues}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="new-item-form">
          <div className="new-item-form__fields">
            <div className="new-item-form__fields-data">
              <div className="new-item-form__field">
                <Field name="name" component={Input} type="text" label="Nazwa" />
              </div>
              <div className="new-item-form__field">
                <Field name="mark" component={Input} type="text" label="Marka" />
              </div>
              <div className="new-item-form__field">
                <Field
                  name="category"
                  component={Input}
                  options={CATEGORIES}
                  type="select"
                  label="Kategoria"
                />
              </div>
              <div className="new-item-form__field">
                <Field
                  name="condition"
                  component={Input}
                  options={ITEM_CONDITIONS}
                  type="select"
                  label="Stan"
                />
              </div>
              <div className="new-item-form__field new-item-form__field--textarea">
                <Field
                  name="description"
                  component={Input}
                  type="textarea"
                  label="Opis przedmiotu"
                />
              </div>
            </div>
            <div className="new-item-form__fields-dropzone">
              <div className="new-item-form__field new-item-form__field--dropzone">
                <Field name="images[]" component={Dropzone} multiple />
              </div>
            </div>
          </div>
          <div className="new-item-form__buttons">
            <button type="submit">Dodaj</button>
          </div>
        </form>
      )}
    </Form>
  );
};

NewItemForm.propTypes = {
  validateFormValues: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
};

export { NewItemForm };
