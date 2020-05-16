import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createNewItem } from '../redux/user/userActions';
import { saveImage } from '../api/images';
import { NewItemForm } from '../components/NewItemForm/NewItemForm';

const NewItemFormContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getImagesIds = async images => {
    let imagesIds = [];
    for (const image of images) {
      imagesIds.push(await saveImage(image));
    }
    return imagesIds;
  };

  const handleSubmitForm = async newItemValues => {
    const copyOfNewItemValues = { ...newItemValues };

    const { images } = copyOfNewItemValues;

    if (images && images.length) {
      copyOfNewItemValues.imageIds = await getImagesIds(images);
      delete copyOfNewItemValues.images;
    }

    dispatch(createNewItem(copyOfNewItemValues, history));
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
