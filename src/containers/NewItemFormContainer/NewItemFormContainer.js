import React from 'react';
import { createNewItem, getItems } from '../../redux/user/userActions';
import { useDispatch } from 'react-redux';
import { NewItemForm } from '../../components/NewItemForm/NewItemForm';

const NewItemFormContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = values => {
    dispatch(getItems());
    //dispatch(createNewItem(values));
  };

  const validateFormValues = ({ name, mark, category, condition, description }) => {
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
    return errors;
  };

  return (
    <NewItemForm validateFormValues={validateFormValues} handleSubmitForm={handleSubmitForm} />
  );
};

export { NewItemFormContainer };
