import React from 'react';
import { NewItemFormContainer } from '../../containers/NewItemFormContainer';
import './NewItemPage.scss';

const NewItemPage = () => {
  return (
    <div className="new-item-page">
      <div className="new-item-page__form">
        <NewItemFormContainer />
      </div>
    </div>
  );
};

export { NewItemPage };
