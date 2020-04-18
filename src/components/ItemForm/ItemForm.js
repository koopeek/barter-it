import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { createNewItem } from '../../redux/user/userActions';
import Dropzone from '../Dropzone/Dropzone';
import CATEGORIES from '../../constans/categories';
import ITEM_CONDITIONS from '../../constans/itemConditions';
import Input from '../Input/Input';
import './ItemForm.scss';

const ItemForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = values => {
    dispatch(createNewItem(values));
  };

  const validate = ({ name, mark, category, condition, description }) => {
    const errors = {};

    if (!name || name.length < 3) {
      errors.name = 'Nazwa przedmiotu musi zawierać conajmniej 3 znaki!';
    }
    if (!mark) {
      errors.mark = 'Musisz podać markę przedmiotu!';
    }
    if (!category || category === 'SELECT') {
      errors.category = 'Musisz wybrać kategorie!';
    }
    if (!condition || condition === 'SELECT') {
      errors.condition = 'Musisz wybrać stan przedmiotu!';
    }
    if (!description || description.length < 10) {
      errors.description = 'Opis przedmiotu musi zawierać conajmniej 10 znaków!';
    }
    // return errors;
  };

  return (
    <Form onSubmit={handleSubmitForm} validate={validate}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off" className="form-newItem">
          <div className="form-newItem__left">
            <div className="form__field">
              <Field name="name" component={Input} type="text" label="Nazwa" />
            </div>
            <div className="form__field">
              <Field name="mark" component={Input} type="text" label="Marka" />
            </div>
            <div className="form__field">
              <Field
                name="category"
                component={Input}
                options={CATEGORIES}
                type="select"
                label="Kategoria"
              />
            </div>
            <div className="form__field">
              <Field
                name="condition"
                component={Input}
                options={ITEM_CONDITIONS}
                type="select"
                label="Stan"
              />
            </div>
            <div className="form__field form__field--textarea">
              <Field name="description" component={Input} type="textarea" label="Opis przedmiotu" />
            </div>
          </div>
          <div className="form-newItem__right">
            <div className="form__field form__field--dropzone">
              <Field name="images[]" component={Dropzone} multiple />
            </div>
          </div>

          {/* <div className="form__buttons">
            <button type="submit">Dodaj</button>
          </div> */}
        </form>
      )}
    </Form>
  );
};

export default ItemForm;
