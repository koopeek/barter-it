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
      <section className="main-view__categories">
        <div className="main-view__categories__header">
          <h2>Kategorie</h2>
        </div>

        <article className="main-view__categories__list">
          <CategoriesList categories={categories} />
        </article>
      </section>
    </main>
  );
};

export default Main;
