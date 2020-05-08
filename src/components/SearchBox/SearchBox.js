import React from 'react';
import { SearchBoxForm } from './SearchBoxForm/SearchBoxForm';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-box__form">
        <SearchBoxForm />
      </div>
    </div>
  );
};

export { SearchBox };
