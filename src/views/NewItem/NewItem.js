import React from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import './NewItem.scss';

const NewItem = () => {
  return (
    <div>
      <div className="new-item-view-content">
        <div className="new-item-view-content__form">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
