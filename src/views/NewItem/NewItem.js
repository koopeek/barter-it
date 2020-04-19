import React from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import './NewItem.scss';

const NewItem = () => {
  return (
    <div className="new-item-view">
      <div className="new-item-view__form">
        <ItemForm />
      </div>
    </div>
  );
};

export default NewItem;
