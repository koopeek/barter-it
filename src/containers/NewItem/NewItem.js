import React from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import Header from '../../components/Header/Header';
import './NewItem.scss';
import Icon from '../../assets/pictures/undraw_publish_article_icso.png';

const NewItem = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__picture">
          <img src={Icon}></img>
        </div>
        <div className="content__form">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default NewItem;
