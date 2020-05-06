import React from 'react';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import './Main.scss';

const Main = () => {
  return (
    <main className="main-view">
      <div className="main-view__search-box">
        <SearchBox />
      </div>
    </main>
  );
};

export default Main;
