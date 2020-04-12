import React from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import './NewItem.scss';

const NewItem = () => {
  return (
    <div>
      <div className="new-item-content">
        <div className="new-item-content__form">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
