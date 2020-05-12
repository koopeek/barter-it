import React from 'react';
import { NewItemFormContainer } from '../../containers/NewItemFormContainer/NewItemFormContainer';
import './NewItemPage.scss';

const NewItemPage = () => {
  return (
    <div className="new-item-view">
      <div className="new-item-view__form">
        <NewItemFormContainer />
      </div>
    </div>
  );
};

export { NewItemPage };
