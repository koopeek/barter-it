import React from 'react';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import './MainPage.scss';

const MainPage = () => {
  return (
    <main className="main-page">
      <div className="main-page__search-box">
        <SearchBox />
      </div>
    </main>
  );
};

export { MainPage };
