import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchSubmitButton.scss';

const SearchSubmitButton = () => {
  return (
    <button type="submit" className="search-submit-button">
      <FontAwesomeIcon icon={faSearch} className="search-submit-button__icon" />
      <span className="search-submit-button__textContent">Szukaj</span>
    </button>
  );
};

export { SearchSubmitButton };
