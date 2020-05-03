import React from 'react';
import './CategoriesList.scss';

const CategoriesList = ({ categories }) => {
  const handleButtonClick = category => {
    // TODO: IMPLEMENT
  };

  const renderCategoriesListItems = () => {
    return categories.map(category => {
      return (
        <li key={category.type} className="categories-list__list__item">
          <button type="button" onClick={() => handleButtonClick(category)}>
            {category.label}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="categories-list">
      <ul className="categories-list__list">{renderCategoriesListItems()}</ul>
    </div>
  );
};

export default CategoriesList;
