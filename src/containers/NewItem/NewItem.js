import React from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import Header from '../../components/Header/Header';
import './NewItem.scss';

const NewItem = () => {
  return (
    <div>
      <Header />
      <div className="new-item-content">
        <div className="new-item-content__form">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
