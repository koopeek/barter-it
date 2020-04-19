import React from 'react';
import Info from '../../components/Info/Info';
import './Main.scss';
import CategoriesList from '../../components/CategoriesList/CategotiesList';
import categories from '../../constans/categories';

const Main = () => {
  return (
    <main className="main-view">
      <div className="main-view__info">
        <Info />
      </div>
      <div className="main-view__categories">
        <h2 className="main-view__categories__header">Kategorie</h2>
        <div className="main-view__categories__list">
          <CategoriesList categories={categories} />
        </div>
      </div>
    </main>
  );
};

export default Main;
